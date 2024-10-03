import Aboutus from "./components/Aboutus";
import Donor from "./components/Donor";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";


function App() {
  return (
    <Router>
    <div>
      <NavBar/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="Aboutus" element={<Aboutus/>}/>
        <Route path="Donor" element={<Donor/>}/>

      </Routes>

      
    </div>
    </Router>
  );
}

export default App;
