Signature
---
签名规则@1.0.2


### 签名公共参数
公共参数添及签名结果加到请求参数中  
1、GET请求添加到query  
2、其他请求添加到body  
```yaml
appId: 商户id
once: 随机字符串
timastamp: 签名时间戳
```

### 测试帐户
```yaml
appId: test
appSecret: test
```

### 签名过程示例
```js
params = {
    name: 'tom',
    appId: 'test',
    once: 'avw7ggazw42zoh8rk0iyqvi67h',
    timestamp: 1577836800000
}


// => 对params的key进行排序，并转换成字符串
str = 'appId=test&name=tom&once=avw7ggazw42zoh8rk0iyqvi67h&timestamp=1577836800000'


// => 签名密钥 appSecret
// => 使用hmac-sha256算法对签名字符串str进行签名，结果转化为16进制，转化为大写
sign = 'CE6EAD6200FCD4215FCE72E623BF45AE26FAC7E9B6506DF83FA3C6C6C60571BD'
```
