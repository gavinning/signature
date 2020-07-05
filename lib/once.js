// 校验id是否重复

module.exports = (redis) => {
    const { Increment } = require('@4a/rediskit')(redis)

    return async function isRepeat(id, timeout = 300) {
        const increment = Increment.init('app:@4a/sign:once', id)
        const isRepeated = await increment.isRepeat()
        await increment.expire(timeout)
        return isRepeated
    }
}
