const userService = require('./../services/user.service')

class userController {

    static async updateProfile(req, res, next) {

        try {

            let response = await userService.updateProfile(req)
            res.status(response.code).json(response)

        } catch (error) {
            console.log(error)
            res.status(500).json({ msg: "An error ocured on our server", status: false })
        }
    }

    static async users(req, res, next) {

        try {

            let response = await userService.users(req)
            res.status(response.code).json(response)

        } catch (error) {
            console.log(error)
            res.status(500).json({ msg: "An error ocured on our server", status: false })
        }
    }

    static async updateUser(req, res, next) {

        try {

            let response = await userService.updateUser(req)
            res.status(response.code).json(response)

        } catch (error) {
            console.log(error)
            res.status(500).json({ msg: "An error ocured on our server", status: false })
        }
    }


}

module.exports = userController