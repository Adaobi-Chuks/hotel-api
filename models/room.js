const {model, Schema, Types} = require("mongoose");
const constants = require("../constants/constants");
const {DATABASES} = constants;
const ObjectId = Types.ObjectId;

const RoomSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  roomType: {
    type: ObjectId,
    ref: DATABASES.ROOMTYPE,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  floor: {
    type: Number,
    required: true
  },
  capacity: {
    type: Number,
    required: true
  },
  amenities: [String],
  booked: {
    type: Boolean,
    default: false
  }
});

const Room = model(DATABASES.ROOM, RoomSchema);
module.exports = Room;