import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Display from "./Display/Display";
import Resume from "./Resume/Resume";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import Background from "./Display/Background"


function App() {
  return (
    <div>
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
