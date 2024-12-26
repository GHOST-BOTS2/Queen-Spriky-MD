const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'uOpEwAza#59JIX_00JWIiTfyXEhBeI1jcDKywHOzaVgWUI3IeQ6E', // Enter Your Session ID
    MONGODB: process.env.MONGODB || 'mongodb://mongo:mongodb://mongo:dccsmLClukfKNxmhZVrmsdScwKiOtGbf@autorack.proxy.rlwy.net:44877:27017',// Enter Your MongoDB URL
    OWNER_NUMBER: process.env.OWNER_NUMBER || '94741140620',    // Enter Your Owner Number
};
