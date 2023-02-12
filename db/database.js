const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const {DATABASE_URI, MESSAGES} = require("../constants/constants");

function database() {
    mongoose.connect(DATABASE_URI, {
            // useCreateIndex:true,
            // useNewUrlParser:true,
            // userUnifiedTopology:true,
        })
        .then(() => {
            console.log(MESSAGES.DATABASE.CONNECTED);
        })
        .catch((err) => {
            console.log(MESSAGES.DATABASE.ERROR);
        });
}

module.exports = database;