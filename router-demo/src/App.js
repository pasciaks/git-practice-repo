
import './App.css';
import { Routes, Route, /*NavLink,*/ Link } from 'react-router-dom';
import Homepage from './Homepage';
import AboutMe from './AboutMe';
import cat from "./assets/cat.png";
import dog from "./assets/images/dog.png";

function ProfileImage() {
  const profileImg = "https://picsum.photos/400/265";
  return <img src={profileImg} alt="Profile image" />
}

function App() {
  const test = true;
  let randomImageUrl = 'https://picsum.photos/536/354';
  let date = new Date();
  return (
    <div className="App">
      <h1>Router Demo</h1>
      <ProfileImage />
      <hr></hr>
      <img src={cat} alt="cat" />
      <img src={require("./assets/cat.png")} alt="cat" />
      <div> {
        test && `Hello`} World </div>
      {date.toDateString()}
      <hr></hr>
      <img src={dog} alt="dog" />
      <img src={require("./assets/images/dog.png")} alt="dog" />
      <img src={randomImageUrl} alt="dog" />
      <hr></hr>
      <hr></hr>
      {/* NOTE- because of bundling you can't link directly to src folder, only public folder */}
      <img src="./assets/images/dog.png" alt="dog" />
      <img src="logo512.png" alt="dog" />
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
