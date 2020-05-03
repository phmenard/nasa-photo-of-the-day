import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/nav/NavBar';
import MainContent from './components/content/main_content/MainContent';
import Footer from './components/footer/Footer';

import "./App.css";


function App() {
  
  return (
    <div>
      <NavBar />
      <MainContent />
      <Footer />
     
      
    </div>
  );
}
export default App;
