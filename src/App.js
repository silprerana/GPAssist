import './App.css';
import { Gpa_usa } from './Gpa_usa';
import { Home } from './Home'
import { Country } from './Country.js';
import {Route, Routes, BrowserRouter as Router, Link} from "react-router-dom";

function App() {
  return (
      <Router>
        <div>
          <Link to="/"></Link>
          {/* <Home /> */}

        </div>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path="/country" exact element={<Country />} />
          <Route path='/usa' exact element={<Gpa_usa />}/>
        </Routes>
      </Router>
  );
}

export default App;
