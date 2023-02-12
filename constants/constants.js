const constants = {
    DATABASE_URI: process.env.DATABASE_URI,

    ZERO: 0,

    I: "i",

    V: "-__v",

    DATABASES: {
        ROOMTYPE: "roomType",
        ROOM: "room"
    },

    MESSAGES: {
        ROOMTYPE: {
            CREATED: "Roomtype created successfully",
            FETCHED: "Roomtype fetched successfully",
            DELETED: "Roomtype deleted successfully",
            DUPLICATE_ERROR: "Roomtype already exists",
            INVALID_ID_ERROR: "Invalid id",
            ERROR: "Error performing request on room type"
        },
        ROOM: {
            CREATED: "Room created successfully",
            FETCHED: "Room fetched successfully",
            FETCHEDALL: "Rooms fetched successfully",
            UPDATED: "Room updated successfully",
            DELETED: "Room deleted successfully",
            DUPLICATE_ERROR: "Roomname already exists",
            INVALID_ID_ERROR: "Invalid id",
            ERROR: "Error performing request on room"
        },
        DATABASE: {
            CONNECTED: "MongoDB is connected",
            ERROR: "There was an error while connecting to the database."
        }
    }
};

module.exports = constants;