const bcrypt = require('bcryptjs')
const User = require('./../models/user')

class registerService {

    static async register(req) {
        // we initialize a response obj
        let response = { status: false, message: "", code: 200 }

        const { email, full_name, password, password_confirmation, birth_date } = req.body

        // password was confirmed
        if (password.localeCompare(password_confirmation) !== 0) {
            response.code = 400
            response.message = "password mismatch"
            return response
        }

        if (!(email && full_name && password && birth_date)) {
            // if any of the fields are empty we set response
            response.code = 400
            response.message = "Please ensure all inputs are filled correctly"
            return response
        }

        // check if user exists already
        const UserExists = await User.findOne({ email })
        if (UserExists) {
            response.code = 409
            response.message = "User already exists."
            return response
        }

        let hashedPassword = await bcrypt.hash(password, 10)

        // proceed to register user
        const user = await User.create({
            email: email.toLowerCase(),
            full_name,
            birth_date,
            password: hashedPassword
        })

        response.code = 200
        response.status = true
        response.message = 'Your account was successfully created'
        return response
    }
}

module.exports = registerService