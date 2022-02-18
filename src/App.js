// Set up Express server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const api = require('./Api');
const port = 3000;

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, }));

app.listen(port, () => {
    console.log(`Restaurant app is running on port ${port}.`);
});

// Restaurant endpoints
app.post('/restaurants/', api.addRestaurant);
app.put('/restaurants/:id', api.updateRestaurant);
app.get('/restaurants/:id', api.getRestaurant);
app.get('/restaurants/', api.getAllRestaurants);
app.patch('/restaurants/:id', api.replaceRestaurant);
app.delete('/restaurants/:id', api.deleteRestaurant);

// Reservation endpoints
app.post('/reservations/', api.addReservation);
app.put('/reservations/:confirmation_number', api.updateReservation);
app.get('/reservations/:confirmation_number', api.getReservation);
app.get('reservations/', api.getAllReservations);
app.patch('/reservations/:confirmation_number', api.replaceReservation);
app.delete('/reservations/:confirmation_number', api.deleteReservation);

// Table endpoints
app.post('/tables/', api.addTable);
app.put('/tables/:restaurant_id/:table_id', api.updateTable);
app.get('/tables/:restaurant_id/:table_id', api.getTable);
app.get('/tables/', api.getAllTables);
app.patch('/tables/:restaurant_id/:table_id', api.replaceTable);
app.delete('/tables/:restaurant_id/:table_id', api.deleteTable);

// Employee endpoints
app.post('/employees/', api.addEmployee);
app.put('/employees/:restaurant_id/:emp_username', api.updateEmployee);
app.get('/employees/:restaurant_id/:emp_username', api.getEmployee);
app.get('/employees/', api.getAllEmployees);
app.patch('/employees/:restaurant_id/:emp_username', api.replaceEmployee);
app.delete('/employees/:restaurant_id/:emp_username', api.deleteEmployee);
