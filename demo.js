const Redis = require('ioredis')
const redis = new Redis()
const Sign = require('./sign')

const sign = new Sign({
    appId: 'test',
    appSecret: 'test',
    // redis,
})

const params = {
    name: 'tom',
    age: 20,
}

const params2 = {
    name: 'tom',
    age: 20,
    once: 'avw7ggazw42zoh8rk0iyqvi67h',
    timestamp: 1577836800000
}

async function test() {
    console.log(
        sign.append(params),
        await sign.verify(params),
    )
}
test()
