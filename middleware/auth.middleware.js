const jwt = require("jsonwebtoken");


class authMiddleware {

    static check(req, res, next) {

        try {

            const token = req.header("x-auth-token")

            if (!token) return res.status(403).send({ status: false, message: "Access denied." })

            const decoded = jwt.verify(token, process.env.TOKEN_KEY)

            req.user = decoded

            next()

        } catch (error) {

            res.status(400).send({ message: "Invalid token", status: false })
        }
    }
}
module.exports = authMiddleware