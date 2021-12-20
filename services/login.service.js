const bcrypt = require('bcryptjs')
const User = require('./../models/user')
const jwt = require('jsonwebtoken')

class loginService {

    static async login(req) {

        // we initialize a response obj
        let response = { status: false, message: "", code: 200, data: {} }
        const tokenKey = process.env.TOKEN_KEY

        const { email, password } = req.body

        if (!(email && password)) {
            // if any of the fields are empty we set response
            response.code = 400
            response.message = "Please ensure all inputs are filled correctly"
            return response
        }

        // check if user exists already
        const user = await User.findOne({ email })
            // if password does not checkout nicely
        if (!(user && await bcrypt.compare(password, user.password))) {
            response.message.msg = "Invalid credentials submitted"
            response.status = 400
            return response
        }

        //update last login
        await user.update({ last_login: new Date() })

        // we create a jwt token for this user now
        const token = jwt.sign({ user_id: user._id, email, is_admin: user.is_admin }, tokenKey, { "expiresIn": "2h" })


        // save the token
        user.token = token
        delete user.password

        response.data.user = user
        response.data.token = token
        response.status = true
        response.message = "Login was successful"
        return response;
    }

}

module.exports = loginService