import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/nav/NavBar';
import MainContent from './components/content/MainContent';
import "./App.css";


function App() {
  
  return (
    <div>
      <NavBar />
      <MainContent />
      
    </div>
  );
}
export default App;
