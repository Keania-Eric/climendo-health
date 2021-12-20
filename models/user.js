const mongoose = require('mongoose')

// defining the user attributes
const userAttributes = {
    email: { type: String, unique: true },
    full_name: { type: String },
    birth_date: { type: Date },
    password: { type: String },
    last_login: { type: Date, default: null }
}

// schema
const userSchema = new mongoose.Schema(userAttributes)

const User = mongoose.model('User', userSchema)

module.exports = User