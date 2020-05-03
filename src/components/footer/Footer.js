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
                <Navbar color="dark" light expand="md">
                    <NavbarBrand href="/"><p className='footer'>© 2020 Paul Menard</p></NavbarBrand>
                    

                </Navbar>
            </div>
        </header>
    );

}

export default Footer;