const Redis = require('ioredis')
const redis = new Redis()
const Sign = require('./sign')

const sign = new Sign({
    appId: 'test',
    appSecret: 'test',
    // redis,
    debug: true
})

const params = {
    app: 'app',
    name: 'name',
    // once: 'hp5nfvydjtpo08szqxyyqnr20o'
}


async function test() {
    console.log(
        sign.append(params),
        await sign.verify(params),
    )
}
test()
