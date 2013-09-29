/**
 * Created by youxiachai on 13-9-29.
 */

var cryptoUtils = require('../lib/cryptoUtils'),
    should = require('should');

describe('should test right', function () {
    it('sort params', function () {
        var params = {};
        params.method = "12345";
        params.page = "asdfg";
        params.phone = "qwert";

        console.log();

        var testSortParams = ['method', 'page', 'phone'];

        var sortParams = cryptoUtils.sortParams(params);

        var i = 0;
        Object.keys(sortParams).forEach(function (key) {
            key.should.equal(testSortParams[i]);
            i++;
        });
    })

    it("timestamp equal length 13", function () {
        var timestamp = new Date().getTime() + '';
        timestamp.length.should.equal(13)
    })
})