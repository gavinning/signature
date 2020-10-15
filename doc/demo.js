const Sign = require('../sign')

const sign = new Sign({
    appId: 'test',
    appSecret: 'test',
    debug: true
})

const params = {
    name: 'tom',
    appId: 'test',
    once: 'avw7ggazw42zoh8rk0iyqvi67h',
    timestamp: 1577836800000
}

async function test() {
    console.log(
        sign.append(params),
        await sign.verify(params),
    )

    process.exit(0)
}
test()
