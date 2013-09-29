/**
 * @author: youxiachai
 * @Date: 13-6-23
 * @version: 1.0
 * To change this template use File | Settings | File Templates.
 */

var cryptoUtils = require('../lib/cryptoUtils'),
    should = require('should');

describe('should right', function () {
    it('md5', function () {
        cryptoUtils.md5("123456").should.equal("e10adc3949ba59abbe56e057f20f883e");
    })

    it('test sign', function () {
        var params = {};
        params.phone = '135241488855';
        params.method = 'md5';
        params.timestamp = 1380440872897;

        var params = cryptoUtils.sortParams(params);

        var str = "";

        Object.keys(params).forEach(function (key) {
//            console.log(params[key]);
            str += '&'+key+'='+params[key]
        });

        var strXX = str.replace('&', '');

        var key = '514ea7c5484ea0e831a34074496da2f3';

        var strXX = strXX + key;

        cryptoUtils.md5(strXX).should.equal('7799de5404a829576bfa13041b3c8b62');
    })
})



