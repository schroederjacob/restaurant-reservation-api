import logo from './logo.svg';
import './App.css';

const api = require('./Api');

// Restaurant endpoints
App.post('/restaurants/', api.postRestaurant);
App.put('/restaurants/:id', api.putRestaurant);
App.get('/restaurants/:id', api.getRestaurant);
App.get('/restaurants/', api.getAllRestaurants);
App.delete('/restaurants/:id', api.deleteRestaurant);

// Reservation endpoints
//App.post('/reservations/post', api.postReservation);
//App.put('/reservations/put', api.putReservation);
//App.get('/reservations/:id', api.getReservation);
//App.patch('/reservations/patch', api.patchReservation);
//App.delete('/reservations/:id', api.deleteReservation);

// Table endpoints
//App.post('/tables/post', api.postTable);
//App.put('/tables/put', api.putTable);
//App.get('/tables/:id', api.getTable);
//App.patch('/tables/patch', api.patchTable);
//App.delete('/tables/:id', api.deleteTable);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Base Node project for the app
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
