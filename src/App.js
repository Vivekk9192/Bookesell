// import logo from './logo.svg';
import './App.css';
import { User } from './user';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './home';
import { About } from './about';


function App() {
  const userName = "Vivek";
  const aboutS="About Section";
  return (
    <BrowserRouter>
    <div className="App">
      <header>This is a header</header>
      <Routes>
      <Route path="/user" element={<User name={userName} age={19}/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About info={aboutS}/>}/>
      
      </Routes>
     <footer>This is a footer</footer>
    </div>
    </BrowserRouter>
      
  );
}

export default App;

    /* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */