const RoomType = require('../models/roomType');

class Controller {

    //create roomtype
    async addRoomType(type) {
        return await RoomType.create(type);
    }

    //get all roomtypes
    async getAllRoomTypes() {
        return await RoomType.find({}, "-__v");
    }
    
    //delete room types using an id
    async deleteRoomTypeById(id) {
        return await RoomType.findOneAndDelete({_id: id});
    }

}

module.exports = new Controller();