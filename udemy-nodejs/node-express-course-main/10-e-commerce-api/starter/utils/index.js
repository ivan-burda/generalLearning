const {createJWT, isTokenValid, attachCookiesToResponse} = require('./jwt');
const {createTokenUser} = require('./createTokenUser');
const {checkPermissions} = require('./checkPermissions');

module.exports = {
    createJWT,
    createTokenUser,
    isTokenValid,
    attachCookiesToResponse,
    checkPermissions
}