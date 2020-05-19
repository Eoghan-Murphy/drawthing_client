import React from 'react';
import {
    Container,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';

class SiteNavigation extends React.Component {
    render(){
        const {hideLinks} = this.props
        return(
            <div className="bg-success">
                <Container>
                <Navbar className="navbar-light" dark>
                    <NavbarBrand href="/">drawThing</NavbarBrand>
                    {!hideLinks &&
                    <Nav className="ml-auto">
                        <NavItem>
                            <NavLink href="/login" className="text-light">Log In</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/register" className="text-light">Register</NavLink>
                        </NavItem>
                    </Nav>
                    }
                </Navbar>
                </Container>
            </div>
        )
    }
}
export default SiteNavigation