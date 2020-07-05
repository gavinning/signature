Signature
---
简单签名认证，默认采用hmac-sha256加密，应对大多数场景足够用了

### Install
```sh
npm i @4a/sign
```


### Usage
```js
const Sign = require('@4a/sign')
const sign = new Sign({ appId, appSecret })
```
**创建签名**
```js
params = sign.append(params)

// Or
params.sign = sign.create(params)
```
**验证签名**
```js
sign.verify(params) // 此时params包含sign
```

### Options 实例化参数
```yaml
appId: test
appSecret: test

# 可选参数
debug: false # 调试模式，显示调试日志
redis: new Redis() # ioredis实例，允许为空，为空则verify方法不验证once字段
timeout: 300 # 单位分，默认5分钟
```

### 公共签名参数
请求参数字段应避免与签名参数字段冲突
```yaml
# 商户id
appId


# 一次性随机字符串
# 推荐为空，为空时自动生成，大多数场景无须主动设置
# options.redis参数存在时会验证该参数，有效防止重放攻击
once


# 签名时间戳
# 用于验证签名是否过期，默认5分钟
# 推荐为空，为空时自动生成，大多数场景无须主动设置
timestamp 
```


### Example
```sh
node demo.js
```
**签名结果示例**
```
BC6AE3D7628B554F8624548327446B0A977A4EC12D48FC855ED783254105EDD3
```
