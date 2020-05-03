import React, { useState } from "react";
import './nav.css';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    NavbarText
} from 'reactstrap';

function NavBar() {


    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <header>
            <div>
                <Navbar color="dark" light expand="md">
                    <NavbarBrand href="/"><p className='brand'>Nasa Image of The Day</p></NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        
                        <NavbarText> <img className="nav-image" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F3dprintingindustry.com%2Fwp-content%2Fuploads%2F2015%2F06%2Fnasa-3D-printing1-1-906x906.gif&f=1&nofb=1" alt="Girl in a jacket"></img> 
                        </NavbarText>
                    </Collapse>
                </Navbar>
            </div>
        </header>
    );

}

export default NavBar;