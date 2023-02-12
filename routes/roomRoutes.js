const express = require('express');
const Controller = require('../controllers/roomController');
const constants = require("../constants/constants");
const app = express();
const router = express.Router();
const {ROOM} = constants.MESSAGES;

app.use(express.json());

//create a room
router.post("/", async (req, res) => {
    try {
        const data = await Controller.addRoom(req.body);
        res.status(201)
            .send({ message: ROOM.CREATED, success: true, data });
    } catch (err) {
        if(err.code === 11000) {
            res.status(400)
            .send({ message: ROOM.DUPLICATE_ERROR, success: false });
        }
        res.status(500)
            .send({ message: err.message || ROOM.ERROR, success: false });
    }
});

//get room using id
router.get("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Controller.getRoomById(id);
        if(!data) {
            res.status(404)
            .send({ message: ROOM.INVALID_ID_ERROR, success: false});
        }
        res.status(201)
            .send({ message: ROOM.FETCHED, success: true, data });
    } catch (err) {
        res.status(500)
            .send({ message: err.message || ROOM.ERROR, success: false });
    }
});

//get all rooms with some queries
router.get("/", async (req, res) => {
    try {
        const { search, roomType, minPrice, maxPrice } = req.query;
        const data = await Controller.getAllRooms(search, roomType, minPrice, maxPrice);
        res.status(201)
            .send({ message: ROOM.FETCHEDALL, success: true, data });
    } catch (err) {
        res.status(500)
            .send({ message: err.message || ROOM.ERROR, success: false });
    }
});

//edit room details with id
router.patch("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const obj = req.body;
        const data = await Controller.editRoomById(id, obj);
        if(!data) {
            res.status(404)
            .send({ message: ROOM.INVALID_ID_ERROR, success: false});
        }
        res.status(201)
            .send({ message: ROOM.UPDATED, success: true, data });
    } catch (err) {
        res.status(500)
            .send({ message: err.message || ROOM.ERROR, success: false });
    }
});

//deleting a room details with an id
router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Controller.deleteRoomById(id);
        if(!data) {
            res.status(404)
            .send({ message: ROOM.INVALID_ID_ERROR, success: false});
        }
        res.status(201)
            .send({ message: ROOM.DELETED, success: true, data });
    } catch (err) {
        res.status(500)
            .send({ message: err.message || ROOM.ERROR, success: false });
    }
});

module.exports = router;