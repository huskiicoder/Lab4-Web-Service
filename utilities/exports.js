//Get the connection to Heroku Database
const pool = require('./sql_conn.js')

//Get the crypto utility functions
const credUtils = require('./credentialingUtils')
const generateHash = credUtils.generateHash
const generateSalt = credUtils.generateSalt

const validation = require('./validationUtils.js')

const sendEmail = require('./email.js').sendEmail

// Added this line and "messaging" below as part of lab 5 step 52
let messaging = require('./pushy_utilities.js')

module.exports = { 
    pool, generateHash, generateSalt, validation, sendEmail, messaging
}
