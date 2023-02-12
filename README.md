# HOTEL API

# Overview
A simple API for managing hotel operations. It provides services for managing rooms and room types. The API has two main components: Room and Room Type.

## Room Type
The Room Type component represents a type of room available in a hotel. A Room Type has the following properties:

- name: A unique name for the room type.

## Room
The Room component represents a single room in a hotel. A Room has the following properties:

- name: A unique name for the room.
- roomType: The type of room, represented as an -ObjectId that refers to a Room Type.
- price: The price of the room.
- floor: The floor of the room.
- capacity: The maximum capacity of the room.
- amenities: An array of strings representing the amenities available in the room.
- booked: A boolean indicating whether the room is currently booked or not.

# How To Use
- Clone the repo 
- cd into the directory such that you are in `hotel api`.
- Create a project on mongodb and copy your DATABASE_URI
- Create a .env file at the root of the folder and include your DATABASE_URI in the file in the format below
```
DATABASE_URI = {The DATABASE_URI you created}
```
- To run the solution, make sure you have [nodejs](https://nodejs.org/) installed.
- Use the following command in your terminal to initialize the applicationa and to install the necessary dependencies.
```
npm init -y
npm install
nodemon app
```

# Testing
This folder contains a Postman collection in the [postmanRequest](postmanRequest) folder that you can import to Postman to test the endpoints.
Make sure you replace the roomId and roomTypeId placeholder with a valid id where necessary.

- You need to have Postman or any other similar app or extension installed to test this API.

## Routes
The API has two main routes: Room and Room Type routes.

### Room Type Routes
- POST "{baseUrl}/api/v1/rooms-types/roomtype": Creates a new room type.
- GET "{baseUrl}/api/v1/rooms-types/roomtype/:id": Retrieves a room type by its id.
- GET "{baseUrl}/api/v1/rooms-types/roomtype": Retrieves all room types in the hotel.
- PUT "{baseUrl}/api/v1/rooms-types/roomtype/:id": Updates a room type by its id.
- DELETE "{baseUrl}/api/v1/rooms-types/roomtype/:id": Deletes a room type by its id.

### Room Routes
- POST "{baseUrl}/api/v1/rooms/room": Creates a new room in the hotel.
- GET "{baseUrl}/api/v1/rooms/room/:id": Retrieves a room by its id.
- GET "{baseUrl}/api/v1/rooms/room": Retrieves all rooms in the hotel.
- PUT "{baseUrl}/api/v1/rooms/room/:id": Updates a room by its id.
- DELETE "{baseUrl}/api/v1/rooms/room/:id": Deletes a room by its id.

# Expected Output
If a request is made from the API, the results should look like this if it is successfull:
```
{
  "message": "Description of the response",
  "success": true,
  "data": {...}
}
```
If there is an error, it should look like this:
```
{
  "message": "Error description",
  "success": false
}
```
