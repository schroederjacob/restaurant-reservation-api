// Hardcoded dummy data
const restaurants = [
    {
        id: 1,
        restaurant_name: 'Pizza Place',
        zip_code: 80524
    },
    {
        id: 2,
        restaurant_name: 'Burger Place',
        zip_code: 80524
    }
];

const reservations = [
    {
        table_id: 1,
        reservation_time: 3,
        confirmation_number: 12345
    },
    {
        table_id: 2,
        reservation_time: 4,
        confirmation_number: 12346
    }
];

const tables = [
    {
        table_id: 1,
        restaurant_id: 1,
        size: 4
    },
    {
        table_id: 2,
        restaurant_id: 1,
        size: 4
    }
];

// Restaurant Methods
// Create a restaurant
const postRestaurant = async (request, response) => {
    const { id, restaurant_name, zip_code } = request.body;
    restaurants.push({ id, restaurant_name, zip_code });
    response.status(201).send(`Restaurant added successfully.`);
};
// Replace a restaurant
const putRestaurant = (request, response) => {
    const { id, restaurant_name, zip_code } = request.body;
    restaurants[id-1] = { id, restaurant_name, zip_code };
    response.status(200).send();
};
// Retrieve an individual restaurant
const getRestaurant = (request, response) => {
    const id = parseInt(request.params.id);
    response.status(200).json(restaurants[id-1]);
};
// Retrieve all restaurants
const getAllRestaurants = async (request, response) => {
    response.status(200).json(restaurants);
};
// Modify a restaurant
const patchRestaurant = (request, response) => {
    const { id, restaurant_name, zip_code } = request.body;
    restaurants[id-1] = { id, restaurant_name, zip_code };
    response.status(200).send(`Restaurant updated successfully.`);
};
// Remove a restaurant
const deleteRestaurant = (request, response) => {
    const id = parseInt(request.params.body);
    restaurants.shift(id-1);
    response.status(200).send(`Restaurant deleted successfully.`);
};

// Reservation Methods
// Create a reservation
const postReservation = async (request, response) => {
    const { table_id, reservation_time, confirmation_number } = request.body;
    reservations.push({ table_id, reservation_time, confirmation_number });
    response.status(201).send(`Reservation added successfully.`);
};
// Replace a reservation
const putReservation = (request, response) => {
    const { table_id, reservation_time, confirmation_number } = request.body;
    reservations[confirmation_number] = { table_id, reservation_time, confirmation_number };
    response.status(200).send();
};
// Retrieve an individual reservation
const getReservation = (request, response) => {
    const confirmation_number = parseInt(request.params.confirmation_number);
    response.status(200).json(reservations[confirmation_number]);
};
// Retrieve all reservations
const getAllReservations = async (request, response) => {
    response.status(200).json(reservations);
};
// Modify a reservation
const patchReservation = (request, response) => {
    const { table_id, reservation_time, confirmation_number } = request.body;
    reservations[table_id] = { table_id, reservation_time, confirmation_number };
    response.status(200).send(`Reservation updated successfully.`);
};
// Remove a reservation
const deleteReservation = (request, response) => {
    const confirmation_number = parseInt(request.params.confirmation_number);
    restaurants.shift(confirmation_number);
    response.status(200).send(`Reservation ${confirmation_number}. deleted successfully.`);
};

// Table Methods
// Create a table
const postTable = async (request, response) => {
    const { table_id, restaurant_id, size } = request.body;
    tables.push({ table_id, restaurant_id, size });
    response.status(201).send(`Table added successfully.`);
};
// Replace a Table
const putTable = (request, response) => {
    const { table_id, restaurant_id, size } = request.body;
    tables[table_id, restaurant_id] = { table_id, restaurant_id, size };
    response.status(200).send();
};
// Retrieve an individual Table
const getTable = (request, response) => {
    const table_id = parseInt(request.params.table_id);
    response.status(200).json(tables[table_id-1]);
};
// Retrieve all Tables
const getAllTables = async (request, response) => {
    response.status(200).json(tables);
};
// Modify a Table
const patchTable = (request, response) => {
    const { table_id, restaurant_id, size } = request.body;
    reservations[table_id, restaurant_id] = { table_id, restaurant_id, size };
    response.status(200).send(`Table updated successfully.`);
};
// Remove a Table
const deleteTable = (request, response) => {
    const { table_id, restaurant_id } = request.body;
    restaurants.shift(table_id, restaurant_id);
    response.status(200).send(`Table ${table_id}. deleted successfully.`);
};

// Exports the Methods
module.exports = {
    postRestaurant,
    putRestaurant,
    getRestaurant,
    getAllRestaurants,
    patchRestaurant,
    deleteRestaurant,
    postReservation,
    putReservation,
    getReservation,
    getAllReservations,
    patchReservation,
    deleteReservation,
    postTable,
    putTable,
    getAllTables,
    getTable,
    patchTable,
    deleteTable
};