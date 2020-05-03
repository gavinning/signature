Signature
---
简单签名认证，默认采用hmac-sha256加密，应对大多数场景足够用了

### Install
```sh
npm i @4a/sign
```

### Config
```yaml
appId: test
appSecret: test
```

### Usage
```js
const Sign = require('@4a/sign')
const sign = new Sign(appId, appSecret)
```
create
```js
params.sign = sign.create(params)
```
verify
```js
sign.verify(params) // 此时params包含sign
```

### Example
```sh
node demo.js
```
