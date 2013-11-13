var CalcService = new require('../lib/CalcService')();

/*
 * GET the operators.
 */

exports.operators = function (req, res) {
    CalcService.getOperators(function (err, operators) {
        if (err) {
            return res.send(500, "Something's wrong");
        }
        res.send(operators);
    });
};

exports.calculate = function (req, res) {
    console.log('Got request body: ' + JSON.stringify(req.body));
    CalcService.calculate(req.body.op, req.body.values, function (err, result) {
        if (err) {
            console.log(err);
            return res.send({result:'N/A'});
        }
        res.send({result:result});
    });
};