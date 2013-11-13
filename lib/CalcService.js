var fs = require('fs'),
    logger = require('winston'),
    path = require('path');

module.exports = function () {

    var operators = {},
        operatorsStr = [];

    //load available operators on init
    fs.readdirSync(path.join(__dirname, 'operators')).forEach(function (dir) {
        var op = require('./operators/' + dir.substring(0, dir.indexOf('.')));
        operators[op.toString()] = op.calc;
    });

    for (var i in operators) {
        operatorsStr.push(i);
    }
    ;

    return {
        getOperators:function (callback) {
            logger.debug('Getting available operators');
            callback(null, operatorsStr);
        },
        calculate:function (operation, values, callback) {
            values = values.map(function (v) {
                return Number(v);
            })
            operators[operation](values[0], values[1], callback);
        }
    }
}