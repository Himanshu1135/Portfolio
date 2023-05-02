import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import Home from './components/Home';

import ProjectDisplay from './components/ProjectDisplay';
import { Projects } from './components/Projects';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Routes>
          <Route path = "/" element ={<Home/>}/>
          <Route path = "/projects" element ={<Projects/>}/>
          <Route path="/project/:id" element={<ProjectDisplay />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
