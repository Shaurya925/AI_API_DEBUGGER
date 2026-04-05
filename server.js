const app = require("./src/app");
const config = require("./src/config/config");
const connectDB = require("./src/db/db");

const PORT = config.PORT 

connectDB()

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})


