// Set up Express server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const api = require('./Api');
const port = 3000;

const jwt = require('express-jwt');
const jwtAuthz = require('express-jwt-authz');
const jwks = require('jwks-rsa');

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, }));

// Authorization middleware.
var jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://dev-trs7ilhe.us.auth0.com/.well-known/jwks.json'
    }),
    audience: 'localhost:3000/',
    issuer: 'https://dev-trs7ilhe.us.auth0.com/',
    algorithms: ['RS256']
});

var options = { customScopeKey: 'permissions'};  // This is necessary to support the direct-user permissions
const checkScopes = jwtAuthz([ 'read:restaurants' ]);

app.listen(port, () => {
    console.log(`Restaurant app is running on port ${port}.`);
});

// Restaurant endpoints
app.post('/restaurants/', jwtCheck, api.addRestaurant);
app.put('/restaurants/:id', jwtCheck, api.updateRestaurant);
app.get('/restaurants/:id', jwtCheck, api.getRestaurant);
app.get('/restaurants/', jwtCheck, api.getAllRestaurants);
app.patch('/restaurants/:id', jwtCheck, api.replaceRestaurant);
app.delete('/restaurants/:id', jwtCheck, api.deleteRestaurant);

// Reservation endpoints
app.post('/reservations/', jwtCheck, api.addReservation);
app.put('/reservations/:confirmation_number', jwtCheck, api.updateReservation);
app.get('/reservations/:confirmation_number', jwtCheck, api.getReservation);
app.get('reservations/', jwtCheck, api.getAllReservations);
app.patch('/reservations/:confirmation_number', jwtCheck, api.replaceReservation);
app.delete('/reservations/:confirmation_number', jwtCheck, api.deleteReservation);

// Table endpoints
app.post('/tables/', jwtCheck, api.addTable);
app.put('/tables/:restaurant_id/:table_id', jwtCheck, api.updateTable);
app.get('/tables/:restaurant_id/:table_id', jwtCheck, api.getTable);
app.get('/tables/', jwtCheck, api.getAllTables);
app.patch('/tables/:restaurant_id/:table_id', jwtCheck, api.replaceTable);
app.delete('/tables/:restaurant_id/:table_id', jwtCheck, api.deleteTable);

// Employee endpoints
app.post('/employees/', jwtCheck, api.addEmployee);
app.put('/employees/:restaurant_id/:emp_username', jwtCheck, api.updateEmployee);
app.get('/employees/:restaurant_id/:emp_username', jwtCheck, api.getEmployee);
app.get('/employees/', jwtCheck, api.getAllEmployees);
app.patch('/employees/:restaurant_id/:emp_username', jwtCheck, api.replaceEmployee);
app.delete('/employees/:restaurant_id/:emp_username', jwtCheck, api.deleteEmployee);
