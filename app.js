// Express server setup
const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

app.listen(port, () => {
  console.log(`Restaurant app is running on port ${port}.`);
});

const api = require('./api');

// Restaurant endpoints
app.post('/restaurants/', api.postRestaurant);
app.put('/restaurants/:id', api.putRestaurant);
app.get('/restaurants/:id', api.getRestaurant);
app.get('/restaurants/', api.getAllRestaurants);
app.delete('/restaurants/:id', api.deleteRestaurant);

// Reservation endpoints
//app.post('/reservations/post', api.postReservation);
//app.put('/reservations/put', api.putReservation);
//app.get('/reservations/:id', api.getReservation);
//app.patch('/reservations/patch', api.patchReservation);
//app.delete('/reservations/:id', api.deleteReservation);

// Table endpoints
//app.post('/tables/post', api.postTable);
//app.put('/tables/put', api.putTable);
//app.get('/tables/:id', api.getTable);
//app.patch('/tables/patch', api.patchTable);
//app.delete('/tables/:id', api.deleteTable);