import React, { useState } from "react";
//import NexLink from "./NavLinks/NextLink/NextLink";
import PrevLink from "./PrevLink/PrevLink";

import "./navLinks.css";

const NavLinks = props => {

    return (
        <div className="headerContainer">
            
            <PrevLink />
        </div>

    );


};

export default NavLinks;

