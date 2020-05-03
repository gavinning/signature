const Hmac = require('./lib/hmac')
const filter = require('./lib/filter')

class Sign {
    constructor(appId, appSecret) {
        this.appId = appId
        this.appSecret = appSecret
    }

    create(params) {
        return Hmac.use(this.appSecret).sha256(this.toString(params))
    }

    verify(params) {
        return params.sign === this.create(filter(params, ['sign']))
    }

    toString(obj) {
        return Object.keys(obj)
            .sort()
            .map(key => key + '=' + obj[key])
            .join('&') + '&appKey=' + this.appKey
    }
}

module.exports = Sign
