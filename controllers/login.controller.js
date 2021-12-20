const loginService = require('./../services/login.service')

class loginController {

    static async login(req, res, next) {

        try {

            let response = await loginService.login(req)
            res.status(response.code).json(response)

        } catch (error) {
            console.log(error)
            res.status(500).json({ msg: "An error ocured on our server", status: false })
        }
    }


}

module.exports = loginController