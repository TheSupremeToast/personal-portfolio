import React from 'react';
import { Nav, NavLink, NavMenu }
    from "./NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/home" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/about" activeStyle>
                        About Me
                    </NavLink>
                    <NavLink to="/projects" activeStyle>
                        My Projects
                    </NavLink>
                    <NavLink to="/blog" activeStyle>
                        Blog
                    </NavLink>
                    <NavLink to="/Photography" activeStyle>
                        Photography
                    </NavLink>
                </NavMenu>
            </Nav>
        </>   
    );
};

export default Navbar;
