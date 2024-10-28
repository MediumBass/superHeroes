const express = require("express");
const cors = require("cors");
require('dotenv').config({ path: '../.env' });
const app = express();

const corsOptions = {
    origin: process.env.FRONT_BASEURL
};

const {db} = require("./Sequalize/db.config");

const indexRouter = require("./routers/index")


app.use(cors(corsOptions));
app.use(express.json());
app.use('/api', indexRouter)


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});