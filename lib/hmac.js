const crypto = require('crypto')

class Hmac {
    constructor(secret) {
        this.secret = secret
    }

    sha1(string) {
        return this.hmac('sha1', string)
    }

    sha256(string) {
        return this.hmac('sha256', string)
    }

    sha512(string) {
        return this.hmac('sha512', string)
    }

    hmac(type, string) {
        return crypto
            .createHmac(type, this.secret)
            .update(string, 'utf8')
            .digest('hex')
            .toUpperCase()
    }

    static use(secret) {
        return new Hmac(secret)
    }
}

module.exports = Hmac
