class adminMiddleware {

    static check(req, res, next) {

        try {
            console.log(req.user)
            if (!req.user.is_admin) {
                return res.status(403).send({ status: false, message: "Access denied." })
            }

            next()

        } catch (error) {

            res.status(400).send({ message: "Invalid token", status: false })
        }
    }
}
module.exports = adminMiddleware