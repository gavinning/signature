const Sign = require('./sign')

const sign = new Sign('test', 'test')

const params = {
    app: 'app',
    name: 'name',
    onceStr: Date.now().toString()
}

params.sign = sign.create(params)

console.log(
    params.sign,
    sign.verify(params)
)
