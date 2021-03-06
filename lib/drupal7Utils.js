/**
 * @author: youxiachai
 * @Date: 13-7-23
 * @version: 1.0
 * To change this template use File | Settings | File Templates.
 */

function _password_itoa64() {
    return './0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
}
function _password_base64_encode($input, $count) {
    $output = '';
    $i = 0;
    $itoa64 = _password_itoa64();
    do {
        $value =$input.charCodeAt($i++);
        $output += $itoa64[$value & 0x3f];
        if ($i < $count) {
            $value |= $input.charCodeAt($i) << 8;
        }
        $output += $itoa64[($value >> 6) & 0x3f];
        if ($i++ >= $count) {
            break;
        }
        if ($i < $count) {
            $value |= $input.charCodeAt($i) << 16;
        }
        $output += $itoa64[($value >> 12) & 0x3f];
        if ($i++ >= $count) {
            break;
        }
        $output += $itoa64[($value >> 18) & 0x3f];
    } while ($i < $count);

    return $output;
}

exports._password_itoa64 = _password_itoa64;
exports._password_base64_encode = _password_base64_encode;