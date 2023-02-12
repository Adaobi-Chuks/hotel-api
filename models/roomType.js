const {model, Schema} = require('mongoose');
const constants = require("../constants");
const {DATABASES} = constants;

const RoomTypeSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  }
});

const RoomType = model(DATABASES.ROOMTYPE, RoomTypeSchema);
module.exports = RoomType;