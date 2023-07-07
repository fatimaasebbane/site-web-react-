import Home from './components/home';
import './App.css';
import Restaurant from './components/restaurant';
import Navbar from './components/navbar';
import Coffee from './components/coffee';
import Contact from './components/contact';
import Horaires from './components/horaires';
import Position from './components/position';
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Home />
        <Coffee />
        <Restaurant />
        <Horaires />
        <Contact />
        <Position />
      </div>
    </BrowserRouter>
  );
}
export default App;
