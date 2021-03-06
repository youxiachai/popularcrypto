/**
 * User: youxiachai
 * Date: 13-3-10
 * Time: 上午2:14
 * To change this template use File | Settings | File Templates.
 */
var crypto = require('crypto');
/**
 *
 * @param size
 * @returns {string}
 */
function randomString(size) {
    size = size || 6;
    var code_string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var max_num = code_string.length + 1;
    var new_pass = '';
    while (size > 0) {
        new_pass += code_string.charAt(Math.floor(Math.random() * max_num));
        size--;
    }
    return new_pass;
}
/**
 *
 * @param str
 * @returns {*}
 */
function sha512(str) {
    var sha512sum = crypto.createHash('sha512');
    sha512sum.update(str);
    str = sha512sum.digest('binary');
    return str;
}

exports.encrypt = function encrypt(str, secret) {
    var cipher = crypto.createCipher('aes192', secret);
    var enc = cipher.update(str, 'utf8', 'hex');
    enc += cipher.final('hex');
    return enc;
}

exports.decrypt = function decrypt(str, secret) {
    var decipher = crypto.createDecipher('aes192', secret);
    var dec = decipher.update(str, 'hex', 'utf8');
    dec += decipher.final('utf8');
    return dec;
}

exports.md5 = function md5(str) {
    var md5sum = crypto.createHash('md5');
    md5sum.update(str);
    str = md5sum.digest('hex');
    return str;
}

var drupalUtils = require('./drupal7Utils');
exports.sha512 = sha512;

exports.randomString = randomString;

/**
 * test : $S$DgIdfzFUwixtkfFPBn70laSe1cBfWBYIODUNoTDaU4ItmBG.W5Pg
 * password : 123456
 *
 * @param password
 * @param options
 * @returns {string}
 */
exports.drupal7encrypt = function (password, options) {
    var options = options || {};
    var $count = 'D';
    var salt;
    if (options.salt) {
        salt = options.salt;
    } else {
        salt = randomString(8);
    }
    var $setting = '$S$' + $count + salt;
    var hash = sha512(salt + password);

    var whileCount = 1 << drupalUtils._password_itoa64().indexOf($count);
    do {
        hash = sha512(hash + password);
    } while (--whileCount);

    return  ($setting + drupalUtils._password_base64_encode(hash, 64)).substr(0, 55);
}

//参数字典排序
function sortParams(obj) {
    var index = []
        , resultObj = {};

    Object.keys(obj).forEach(function (key) {
        index.push(key);
    });

    index.sort();

    for (var i = 0; i < index.length; i++) {
        resultObj[index[i]] = obj[index[i]];
    }

    return resultObj;
}

function getTimestamp() {
    return new Date().getTime();
}
exports.timestamp = getTimestamp;
exports.sortParams = sortParams;