var delay = 2000;

/**
 * Calculate Divide
 * @param a
 * @param b
 * @param callback
 */
exports.calc = function (a, b, callback) {
    if (b === 0) {
        return callback({error:"Dividing by 0 is forbidden"});
    }
    setTimeout(function () { //simulate long calculation
        callback(null, a / b);
    }, delay);
}

exports.toString = function(){
    return '/';
}