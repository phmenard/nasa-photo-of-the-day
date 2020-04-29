import React, {useState} from "react";
import "./App.css";
import HeaderContainer from "./components/HeaderContainter/HeaderContainer";
import DataContainer from "./components/DataContainer/DataConainer";
import FooterContainer from "./components/FooterContainer/Footer";

function App() {
  
  const [appDate, setAppDate] = useState(0);

  return (
    <div className="App">
      <HeaderContainer />
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    <DataContainer />
    <FooterContainer />
    </div>
  );
}

export default App;
