const Room = require('../models/room');
const constants = require("../constants");
const {ZERO} = constants;

class Controller {

    //create room
    async addRoom(room) {
        return await Room.create(room);
    }

    //get room using id
    async getRoomById(id) {
        return await Room.findOne({_id: id});
    }

    //get all rooms with some queries
    async getAllRooms(search, roomType, minPrice = ZERO, maxPrice = Number.MAX_SAFE_INTEGER) {
        const queries = {
            name: { $regex: new RegExp(search, 'i') },
            roomType: roomType,
            price: { $gte: parseInt(minPrice), $lte: parseInt(maxPrice)}
        };
        const rooms = await Room.find(queries);
        return rooms;
    }

    //edit room details with id
    async editRoomById(id, obj) {
        return await Room.findOneAndUpdate({ _id: id }, { $set: obj }, { new: true });
    }

    //deleting a room details with an id
    async deleteRoomById(id) {
        return await Room.findOneAndDelete({_id: id});
    }

}

module.exports = new Controller();