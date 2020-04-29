import React, { useState } from "react";
import NavLinks from "./NavLinks/NavLinks";



import "./header.css";


const HeaderContainer = props => {
    const [currentImage, setCurrentImage] = useState(0);

    return (
        <div className="headerContainer">
            <NavLinks />
        </div>
  
    );


};

export default HeaderContainer;
