import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Display from "./Display/Display";
import Resume from "./Resume/Resume";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";


function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
