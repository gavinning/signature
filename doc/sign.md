Signature
---
签名规则@1.0.1


### 签名公共参数
```yaml
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
    age: 20,
    once: 'avw7ggazw42zoh8rk0iyqvi67h',
    timestamp: 1577836800000
}


// => 对params的key进行排序，并转换成字符串
str = 'age=20&name=tom&once=avw7ggazw42zoh8rk0iyqvi67h&timestamp=1577836800000'


// 最终签名字符串
// => str 追加 &appId=appId
// => str += '&appId=test'
str = 'age=20&name=tom&once=avw7ggazw42zoh8rk0iyqvi67h&timestamp=1577836800000&appId=test'


// => 使用hmac-sha256算法对签名字符串str进行签名，结果转化为16进制，转化为大写
sign = '2C6D8FABD1F1BD49E83E01558548179187BCFC8009A84B4978F0197B2E2446C3'
```
