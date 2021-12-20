const bcrypt = require('bcryptjs')
const User = require('./../models/user')

class userService {

    static async updateProfile(req) {
        // we initialize a response obj
        let response = { status: false, message: "", code: 200, data: {} }

        const { full_name, birth_date } = req.body // only full_name and birthdate should be update given emails are indexed for their account

        if (!(full_name && birth_date)) {
            // if any of the fields are empty we set response
            response.code = 400
            response.message = "Please ensure all inputs are filled correctly"
            return response
        }

        const email = req.user.email

        // check if email exists already
        const user = await User.findOneAndUpdate({ email }, { full_name, birth_date }, { new: true })

        response.code = 200
        response.data = user
        response.status = true
        response.message = 'Your account was successfully update'
        return response
    }

    static async users(req) {
        // we initialize a response obj
        let response = { status: false, message: "", code: 200, data: {} }

        // check if email exists already
        const users = await User.find({})

        response.code = 200
        response.data = users
        response.status = true
        response.message = 'Listing all users'
        return response
    }

    static async updateUser(req) {
        // we initialize a response obj
        let response = { status: false, message: "", code: 200, data: {} }

        const { full_name, birth_date } = req.body // only full_name and birthdate should be update given emails are indexed for their account

        if (!(full_name && birth_date)) {
            // if any of the fields are empty we set response
            response.code = 400
            response.message = "Please ensure all inputs are filled correctly"
            return response
        }

        const id = req.params.id

        // check if email exists already
        const user = await User.findOneAndUpdate({ _id: id }, { full_name, birth_date })

        response.code = 200
        response.data = user
        response.status = true
        response.message = 'User was successfully update'
        return response
    }
}

module.exports = userService