var delay = 2000;
/**
 * Calculate Minus
 * @param a
 * @param b
 * @param callback
 */
exports.calc = function (a, b, callback) {
    setTimeout(function () { //simulate long calculation
        callback(null, a - b);
    }, delay);
}

exports.toString = function(){
    return '-';
}