const express = require('express');
const Controller = require('../controllers/roomTypeController');
const constants = require("../constants/constants");
const app = express();
const router = express.Router();
const {ROOMTYPE} = constants.MESSAGES;

app.use(express.json());

//create a room type
router.post("/", async (req, res) => {
    try {
        const data = await Controller.addRoomType(req.body);
        res.status(201)
            .send({ message: ROOMTYPE.CREATED, success: true, data });
    } catch (err) {
        if(err.code === 11000) {
            res.status(400)
            .send({ message: ROOMTYPE.DUPLICATE_ERROR, success: false });
        }
        res.status(500)
            .send({ message: err.message || ROOMTYPE.ERROR, success: false });
    }
});

//Get all room types
router.get("/", async (req, res) => {
    try {
        const roomTypes = await Controller.getAllRoomTypes();
        res.status(200)
            .send({ message: ROOMTYPE.FETCHED, success: true, data: roomTypes });
    } catch (err) {
        res.status(500)
            .send({ message: err.message || ROOMTYPE.ERROR, success: false });
    }
});

//Delete a room type using Id
router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Controller.deleteRoomTypeById(id);
        if(!data) {
            res.status(404)
            .send({ message: ROOMTYPE.INVALID_ID_ERROR, success: false});
        }
        res.status(204)
            .send({ message: ROOMTYPE.DELETED, success: true, data });
    } catch (err) {
        res.status(500)
            .send({ message: err.message || ROOMTYPE.ERROR, success: false });
    }
});

module.exports = router;