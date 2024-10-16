import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar"
import { Banner } from "./components/Banner"
import { Tech } from "./components/Tech";
import { Projects } from "./components/Projects"


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Tech/>
      <Projects/>
    </div>
  );
}

export default App;