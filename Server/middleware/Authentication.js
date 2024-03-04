const jwt = require("jsonwebtoken")

module.exports = function (req, res, next) {
    try {
        const token = req.headers.authorization.split(" ")[1]
        console.log(token);
        const decrypt = jwt.verify(token, process.env.jwt_secretkey);
        req.body.userid = decrypt.userid
        next()
    }
    catch (err) {
        console.log(err, "error");
    }

}