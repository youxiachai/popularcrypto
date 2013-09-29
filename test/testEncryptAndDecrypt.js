/**
 * Created by youxiachai on 13-9-29.
 */


var cryptoUtils = require('../lib/cryptoUtils'),
    should = require('should');

describe('should encrypt and decrypt', function () {
    it('encrypt aes192', function () {
        var originStr = "123456";
        var key = "qwertyuiop";

        var encryptStr = cryptoUtils.encrypt(originStr, key);

        cryptoUtils.decrypt(encryptStr, key).should.equal("123456");
    })
})
