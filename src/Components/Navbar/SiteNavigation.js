import React from 'react';
import {
    Container,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';
import * as ROUTES from '../../routes'
import {withAuthentication} from '../../Session'
import SmallUserDetails from './SmallUserDetails'
import {compose} from 'redux'

import {Link} from 'react-router-dom'

const REGISTRATION_LINKS = <Nav className="ml-auto">
                                <NavItem>
                                    <Link to={ROUTES.SIGN_IN} className="text-decoration-none text-light"><NavLink>Log In</NavLink></Link>
                                </NavItem>
                                <NavItem>
                                    <Link to={ROUTES.SIGN_UP} className="text-decoration-none text-light"><NavLink>Register</NavLink></Link>
                                </NavItem>
                            </Nav>

class SiteNavigation extends React.Component {
    render(){
        const {hideRegLinks} = this.props
        return(
            <div className="bg-success">
                <Container>
                <Navbar className="navbar-light" dark>
                    <Link to={ROUTES.HOME}><NavbarBrand >drawThing</NavbarBrand></Link>
                    {!hideRegLinks && !this.props.authUser &&
                    REGISTRATION_LINKS
                    }
                <SmallUserDetails light/>
                </Navbar>
                </Container>
            </div>
        )
    }
}
export default compose(withAuthentication)(SiteNavigation)