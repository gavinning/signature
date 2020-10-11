const uid = require('uid')
const asp = require('@4a/asp')
const Hmac = require('./lib/hmac')
const filter = require('./lib/filter')
const verifyOnceString = require('./lib/once')

class Sign {
    /**
     * 签名参数
     * @param {String} appId
     * @param {String} appSecret
     * @param {IORedis} redis IORedis实例，允许为空，为空时verify方法不验证once字段
     * @param {Boolean} debug 调试模式，默认false
     * @param {Number} timeout 签名超时时间，单位秒，默认5分钟
     */
    constructor({ appId, appSecret, redis, debug, timeout }) {
        this.appId = appId
        this.appSecret = appSecret

        this.redis = redis
        this.debug = debug || false
        this.timeout = timeout || 5 * 60 // 单位秒

        this.isRepeat = verifyOnceString(redis)
    }

    append(params) {
        params.sign = this.create(params)
        this.debug && asp.debug('@4a/sign:params:', params)
        return params
    }

    create(params) {
        params.once = params.once || uid(26)
        params.timestamp = params.timestamp || Date.now()
        this.debug && asp.debug('@4a/sign:string:', this.toString(params))
        return Hmac.use(this.appSecret).sha256(this.toString(params))
    }

    async verify(params) {
        if (this.isExpired(params)) {
            console.log('sign: Expired Signature')
            return false
        }
        if (this.redis && await this.isRepeat(params.once)) {
            console.log('sign: Repeated Request')
            return false
        }
        if (params.sign !== this.create(filter(params, ['sign']))) {
            console.log('sign: Error Signatrue')
            return false
        }
        return true
    }

    toString(obj) {
        return Object.keys(obj)
            .sort()
            .map(key => key + '=' + obj[key])
            .join('&')
    }

    isExpired(params) {
        return Date.now() - Number(params.timestamp) > this.timeout * 1000
    }
}

module.exports = Sign
