const express = require('express')
const rateLimiter = require('express-rate-limit');
const router = express.Router()
const authenticateUser = require('../middleware/authentication');
const testUser = require('../middleware/testUser');

const apiLimiter = rateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 10,
    message: {
        msg: 'Too many requests from this API. Please try again in 15 minutes.'
    },
});

const {register, login, updateUser} = require('../controllers/auth')
router.post('/register', apiLimiter, register)
router.post('/login', apiLimiter, login)
router.patch('/updateUser', apiLimiter, authenticateUser, testUser, updateUser);

module.exports = apiLimiter;
module.exports = router;
