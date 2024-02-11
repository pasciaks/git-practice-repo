
import './App.css';
import { Routes, Route, NavLink, Link } from 'react-router-dom';
import Homepage from './Homepage';
import AboutMe from './AboutMe';

function App() {
  return (
    <div className="App">
      <h1>Router Demo</h1>
      <nav>
        <ul>
          <li>
            {/* <a href="/">Homepage</a> */}
            {/* <NavLink className="nav-item" to="/">Homepage</NavLink> */}
            <Link className="nav-item" to="/">Homepage</Link>
          </li>
          <li>
            {/* <a href="/about">About Me</a> */}
            {/* <NavLink to="/about">About Me</NavLink> */}
            <Link className="nav-item" to="/about">About Me</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutMe />} />
      </Routes>
    </div>
  );
}

export default App;
