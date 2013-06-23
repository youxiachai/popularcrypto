/**
 * @author: youxiachai
 * @Date: 13-6-23
 * @version: 1.0
 * To change this template use File | Settings | File Templates.
 */

var cryptoUtils = require('../lib/cryptoUtils');

var testMd5 = function (str) {
    console.log(cryptoUtils.md5(str));
}

var testEncryptAndDecrypt = function (str, secret){
    var encryptStr = cryptoUtils.encrypt(str, secret);
    console.log('encrypt-->' + encryptStr);

    console.log('decrypt-->' + cryptoUtils.decrypt(encryptStr, secret));
}

var testRandom = function () {
    console.log(cryptoUtils.randomString(14));
}

testMd5('123456');
testEncryptAndDecrypt('123456', 'helloworld');
testRandom();