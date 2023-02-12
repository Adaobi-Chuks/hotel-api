const express = require("express");
const Controller = require("../controllers/roomController");
const {MESSAGES} = require("../constants/constants");
const {CREATED, FETCHED, FETCHEDALL, UPDATED, DELETED, DUPLICATE_ERROR, INVALID_ID_ERROR, ERROR} = MESSAGES.ROOM;
const app = express();
const router = express.Router();

app.use(express.json());

//create a room
router.post("/", async (req, res) => {
    try {
        const data = await Controller.addRoom(req.body);
        res.status(201)
            .send({ message: CREATED, success: true, data });
    } catch (err) {
        //catch mongodb error if the room has already been created
        if(err.code === 11000) {
            res.status(400)
            .send({ message: DUPLICATE_ERROR, success: false });
        }
        res.status(500)
            .send({ message: err.message || ERROR, success: false });
    }
});

//get room using id
router.get("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Controller.getRoomById(id);
        //catch error if the id doesn't exist
        if(!data) {
            res.status(404)
            .send({ message: INVALID_ID_ERROR, success: false});
        }
        res.status(201)
            .send({ message: FETCHED, success: true, data });
    } catch (err) {
        res.status(500)
            .send({ message: err.message || ERROR, success: false });
    }
});

//get all rooms with some queries
router.get("/", async (req, res) => {
    try {
        const { search, roomType, minPrice, maxPrice } = req.query;
        const data = await Controller.getAllRooms(search, roomType, minPrice, maxPrice);
        res.status(201)
            .send({ message: FETCHEDALL, success: true, data });
    } catch (err) {
        res.status(500)
            .send({ message: err.message || ERROR, success: false });
    }
});

//edit room details with id
router.patch("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const obj = req.body;
        const data = await Controller.editRoomById(id, obj);
        //catch error if the id doesn't exist
        if(!data) {
            res.status(404)
            .send({ message: INVALID_ID_ERROR, success: false});
        }
        res.status(201)
            .send({ message: UPDATED, success: true, data });
    } catch (err) {
        res.status(500)
            .send({ message: err.message || ERROR, success: false });
    }
});

//deleting a room details with an id
router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Controller.deleteRoomById(id);
        //catch error if the id doesn't exist
        if(!data) {
            res.status(404)
            .send({ message: INVALID_ID_ERROR, success: false});
        }
        res.status(204)
            .send({ message: DELETED, success: true, data });
    } catch (err) {
        res.status(500)
            .send({ message: err.message || ERROR, success: false });
    }
});

module.exports = router;