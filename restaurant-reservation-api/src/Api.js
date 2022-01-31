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
    response.status(200).send();
};
// Retrieve an individual restaurant
const getRestaurant = (request, response) => {
    response.status(200).json(restaurants[0]);
};
// Retrieve all restaurants
const getAllRestaurants = async (request, response) => {
    response.status(200).json(restaurants);
};
// Modify a restaurant
const patchRestaurant = (request, response) => {
    const { id, restaurant_name, zip_code } = request.body;
    restaurants[0] = { id, restaurant_name, zip_code };
    response.status(200).send(`Restaurant updated successfully.`);
};
// Remove a restaurant
const deleteRestaurant = (request, response) => {
    restaurants.shift();
    response.status(200).send(`First restaurant in list deleted.`);
};

module.exports = {
    postRestaurant,
    putRestaurant,
    getRestaurant,
    getAllRestaurants,
    patchRestaurant,
    deleteRestaurant
    //postReservation,
    //putReservation,
    //getReservation,
    //patchReservation,
    //deleteReservation,
    //postTable,
    //putTable,
    //getTable,
    //patchTable,
    //deleteTable
};
