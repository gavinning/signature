Signature
---
签名规则 v1.0.3

<br />

### 签名推荐公共参数

```yaml
once: 随机字符串
timastamp: 签名时间戳
```

### 签名密钥信息示例
```yaml
appId: test
appSecret: test
```

### 签名过程示例
```js
// => 所有请求参数放到一个对象里准备签名
params = {
    name: 'tom',
    appId: 'test',
    once: 'avw7ggazw42zoh8rk0iyqvi67h',
    timestamp: 1577836800000
}


// => 对params的key进行排序，并将params转换成字符串
str = 'appId=test&name=tom&once=avw7ggazw42zoh8rk0iyqvi67h&timestamp=1577836800000'


// => 签名密钥 appSecret
// => 使用hmac-sha256算法对签名字符串str进行签名，结果转化为16进制，转化为大写
sign = 'CE6EAD6200FCD4215FCE72E623BF45AE26FAC7E9B6506DF83FA3C6C6C60571BD'
```
