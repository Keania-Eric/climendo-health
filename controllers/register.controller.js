const registerService = require('./../services/register.service')

class registerController {

    static async register(req, res, next) {

        try {

            let response = await registerService.register(req)
            res.status(response.code).json(response)

        } catch (error) {
            console.log(error)
            res.status(500).json({ msg: "An error ocured on our server", status: false })
        }
    }
}

module.exports = registerController