import React, { useState } from "react";
import './footer.css';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from 'reactstrap';

function Footer() {


    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <header>
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">Paul Menard</NavbarBrand>
                    

                </Navbar>
            </div>
        </header>
    );

}

export default Footer;