// Configure PostgreSQL connection
const fs = require('fs');
const Pool = require('pg').Pool
const pool = new Pool({
    user: 'doadmin',
    host: 'db-postgresql-sfo3-26806-do-user-10683631-0.b.db.ondigitalocean.com',
    database: 'restaurantapp',
    password: 'kvPZn8mk5REQqpAJ',
    port: 25060,
    ssl: {
        rejectUnauthorized: true,
        ca: fs.readFileSync('ca-certificate.crt') // file location needs to be placed here.
    }
})

// Restaurant Methods
// Create a restaurant
const addRestaurant = async (request, response) => {
    const id = parseInt(request.params.id)
    const zip_code = parseInt(request.params.zip_code)
    const restaurant_name = request.params.restaurant_name
    const table_count = parseInt(request.params.table_count)
    
    pool.query('INSERT INTO restaurants (id, restaurant_name, zip_code, table_count) VALUES ($1, $2, $3, $4)',
    [id, restaurant_name, zip_code, table_count], 
    (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`Restaurant added with ID: ${id}`)
    })
};
// Update the table counter
const updateTableCount = (request, response) => {
    const id = parseInt(request.params.id)
    const table_count = parseInt(request.params.id)

    pool.query ('UPDATE restaurants SET table_count = $1, WHERE id = $2',
    [table_count, id],
    (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`Restaurant modified with ID: ${id}`)
    })
};
// Modify a restaurant
const updateRestaurant = (request, response) => {
    const id = parseInt(request.params.id)
    const zip_code = parseInt(request.params.zip_code)
    const restaurant_name = request.params.restaurant_name
    const table_count = request.params.table_count

    pool.query ('UPDATE restaurants SET restaurant_name = $1, zip_code = $2, table_count = $3 WHERE id = $4',
        [restaurant_name, zip_code, table_count, id],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`Restaurant modified with ID: ${id}`)
        })
};
// Retrieve an individual restaurant by id
const getRestaurant = (request, response) => {
    const id = parseInt(request.params.id)
    
    pool.query('SELECT * FROM restaurants WHERE id = $1', [id],
    (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
};
// Retrieve all restaurants
const getAllRestaurants = async (request, response) => {
    pool.query('SELECT * FROM restaurants ORDER BY id ASC', (error, results) => {
         if (error) {
             throw error
         }
        response.status(200).json(results.rows);
     })
};
// Replace a restaurant
const replaceRestaurant = (request, response) => {
    const id = parseInt(request.params.id)
    const zip_code = parseInt(request.params.zip_code)
    const restaurant_name = request.params.restaurant_name

    pool.query ('UPDATE restaurants SET restaurant_name = $1, zip_code = $2, id = $3, table_count = $4 WHERE id = $3',
        [restaurant_name, zip_code, id, table_count],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`Restaurant modified with ID: ${id}`)
        })
};
// Remove a restaurant
const deleteRestaurant = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM restaurants WHERE id = $1', [id],
    (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`Restaurant deleted with ID: ${id}`)
    })
};

// Reservation Methods
// Create a reservation
const addReservation = async (request, response) => {
    const table_id = parseInt(request.params.table_id)
    const confirmation_number = parseInt(request.params.confirmation_number)
    const reservation_time = request.params.reservation_time
    
    pool.query('INSERT INTO reservations (table_id, reservation_time, confirmation_number) VALUES ($1, $2, $3)',
    [table_id, reservation_time, confirmation_number], 
    (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`Reservation added with Confirmation Number: ${confirmation_number}`)
    })
};
// Update a reservation
const updateReservation = (request, response) => {
    const confirmation_number = parseInt(request.params.confirmation_number)
    const table_id = parseInt(request.params.table_id)
    const reservation_time = request.params.reservation_time

    pool.query ('UPDATE reservations SET table_id = $1, reservation_time = $2 WHERE confirmation_number = $3',
        [table_id, reservation_time, confirmation_number],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`Reservation modified with Confirmation Number: ${confirmation_number}`)
        })
};
// Retrieve an individual reservation by confirmation_number
const getReservation = (request, response) => {
    const confirmation_number = parseInt(request.params.confirmation_number)
    
    pool.query('SELECT * FROM reservations WHERE confirmation_number = $1', [confirmation_number],
    (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
};
// Retrieve all reservations
const getAllReservations = async (request, response) => {
    pool.query('SELECT * FROM reservations ORDER BY confirmation_number ASC',
     (error, results) => {
         if (error) {
             throw error
         }
        response.status(200).json(results.rows)
     })
};
// Replace a reservation
const replaceReservation = (request, response) => {
    const confirmation_number = parseInt(request.params.confirmation_number)
    const table_id = parseInt(request.params.table_id)
    const reservation_time = request.params.reservation_time

    pool.query ('UPDATE reservations SET table_id = $1, reservation_time = $2, confirmation_number = $3 WHERE confirmation_number = $3',
        [table_id, reservation_time, confirmation_number],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`Reservation modified with Confirmation Number: ${confirmation_number}`)
        })
};
// Remove a reservation
const deleteReservation = (request, response) => {
    const confirmation_number = parseInt(request.params.confirmation_number)

    pool.query('DELETE FROM reservations WHERE confirmation_number = $1', [confirmation_number],
    (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`Reservation deleted with Confirmation Number: ${confirmation_number}`)
    })
};

// Table Methods
// Create a table
const addTable = async (request, response) => {
    const table_id = parseInt(request.params.table_id)
    const restaurant_id = parseInt(request.params.restaurant_id)
    const size = parseInt(request.params.size)
    
    pool.query('INSERT INTO tables (table_id, restaurant_id, size) VALUES ($1, $2, $3)',
    [table_id, restaurant_id, size], 
    (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`Table added with ID: ${table_id}`)
    })
};
// Modify a Table
const updateTable = (request, response) => {
    const restaurant_id = parseInt(request.params.restaurant_id)
    const table_id = parseInt(request.params.table_id)
    const size = parseInt(request.params.size)

    pool.query ('UPDATE tables SET size = $1 WHERE restaurant_id = $2 AND table_id = $3',
        [size, restaurant_id, table_id],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`Table modified with ID: ${table_id}`)
        })
};
// Retrieve an individual Table
const getTable = (request, response) => {
    const restaurant_id = parseInt(request.params.restaurant_id)
    const table_id = parseInt(request.params.table_id)
    
    pool.query('SELECT * FROM tables WHERE restaurant_id = $1 AND table_id = $2', [restaurant_id, table_id],
    (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
};
// Retrieve all Tables
const getAllTables = async (request, response) => {
    pool.query('SELECT * FROM tables ORDER BY restaurant_id ASC',
     (error, results) => {
         if (error) {
             throw error
         }
        response.status(200).json(results.rows)
     })
};
// Replace a Table
const replaceTable = (request, response) => {
    const restaurant_id = parseInt(request.params.restaurant_id)
    const table_id = parseInt(request.params.table_id)
    const size = parseInt(request.params.size)

    pool.query ('UPDATE tables SET table_id = $1, restaurant_id = $2, size = $3 WHERE restaurant_id = $2 AND table_id = $1',
        [table_id, restaurant_id, size],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`Table replaced with ID: ${table_id}`)
        })
};
// Remove a Table
const deleteTable = (request, response) => {
    const table_id = parseInt(request.params.table_id)
    const restaurant_id = parseInt(request.params.restaurant_id)

    pool.query('DELETE FROM tables WHERE restaurant_id = $1 AND table_id = $2', [restaurant_id, table_id],
    (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`Table deleted with ID: ${table_id}`)
    })
};

// Employee Methods
// Create an employee
const addEmployee = async (request, response) => {
    const emp_username = request.params.emp_username
    const emp_password = request.params.emp_password
    const restaurant_id = parseInt(request.params.restaurant_id)
    
    pool.query('INSERT INTO employees (emp_username, emp_password, restaurant_id) VALUES ($1, $2, $3)',
    [emp_username, emp_password, restaurant_id], 
    (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`Employee added to Restaurant: ${restaurant_id}`)
    })
};
// Modify an employee
const updateEmployee = (request, response) => {
    const emp_username = request.params.emp_username
    const emp_password = request.params.emp_password
    const restaurant_id = parseInt(request.params.restaurant_id)

    pool.query ('UPDATE employees SET emp_password = $1 WHERE emp_username = $2 AND restaurant_id = $3',
        [emp_password, emp_username, restaurant_id],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`Employee modified with username: ${emp_username}`)
        })
};
// Retrieve an individual employee by username and restaurant_id
const getEmployee = (request, response) => {
    const emp_username = request.params.emp_username
    const restaurant_id = parseInt(request.params.restaurant_id)
    
    pool.query('SELECT * FROM employees WHERE emp_username = $1 AND restaurant_id = $2',
    [emp_username, restaurant_id],
    (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
};
// Retrieve all employee
const getAllEmployees = async (request, response) => {
    pool.query('SELECT * FROM employees ORDER BY restaurant_id ASC', (error, results) => {
         if (error) {
             throw error
         }
        response.status(200).json(results.rows);
     })
};
// Replace an employee
const replaceEmployee = (request, response) => {
    const emp_username = request.params.emp_username
    const emp_password = request.params.emp_password
    const restaurant_id = parseInt(request.params.restaurant_id)

    pool.query ('UPDATE employees SET emp_username = $1, emp_password = $2, restaurant_id = $3, WHERE emp_username = $1 AND restaurant_id = $3',
        [emp_username, emp_password, restaurant_id],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`Employee modified with username: ${emp_username}`)
        })
};
// Remove an employee
const deleteEmployee = (request, response) => {
    const emp_username = request.params.emp_username
    const restaurant_id = parseInt(request.params.restaurant_id)

    pool.query('DELETE FROM employees WHERE emp_username = $1 AND restaurant_id = $2', [emp_username, restaurant_id],
    (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`Employee deleted with username: ${emp_username}`)
    })
};

// Exports the Methods
module.exports = {
    addRestaurant,
    updateTableCount,
    updateRestaurant,
    getRestaurant,
    getAllRestaurants,
    replaceRestaurant,
    deleteRestaurant,
    addReservation,
    updateReservation,
    getReservation,
    getAllReservations,
    replaceReservation,
    deleteReservation,
    addTable,
    updateTable,
    getAllTables,
    getTable,
    replaceTable,
    deleteTable,
    addEmployee,
    updateEmployee,
    getEmployee,
    getAllEmployees,
    replaceEmployee,
    deleteEmployee
};