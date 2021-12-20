const { response } = require('express')
const express = require('express')
const app = express()

require('dotenv').config()
require('./db/connection').connect()

const PORT = process.env.PORT

//lets use express json
app.use(express.json());

// the authentication routes
const authRouter = require('./routes/auth.routes')
const userRouter = require('./routes/user.routes')

// lets route all request prefixed with /auth to the auth router
app.use('/auth', authRouter)
app.use('/users', userRouter)

app.get('/', (req, res, next) => {
    res.json('Welcome to climendo health')
})

// fallback route
app.get('*', function(req, res) {
    res.status(404).json('Invalid route');
});

app.listen(PORT, () => {
    console.log(`Climendo app running on ${PORT}`)
})