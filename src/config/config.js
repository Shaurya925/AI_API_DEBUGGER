const dotenv = require('dotenv');
dotenv.config()

const config = {
    MONGO_URI:process.env.MONGO_URI,
    PORT:process.env.PORT || 3000,
    GEMINI_API_KEY:process.env.GEMINI_API_KEY
}

module.exports = config