import React from 'react';
import {
    Container,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';
import {firestoreConnect} from 'react-redux-firebase'
import {connect} from 'react-redux'

import * as ROUTES from '../../routes'
import {withAuthentication} from '../../Session'
import SmallUserDetails from './SmallUserDetails'
import {compose} from 'redux'
import SignOutButton from '../SignOutButton'

import {Link} from 'react-router-dom'

const REGISTRATION_LINKS = [
                                <NavItem>
                                    <Link to={ROUTES.SIGN_IN} className="text-decoration-none text-light"><NavLink>Log In</NavLink></Link>
                                </NavItem>,
                                <NavItem>
                                    <Link to={ROUTES.SIGN_UP} className="text-decoration-none text-light"><NavLink>Register</NavLink></Link>
                                </NavItem>
]


const LOGGED_IN_LINKS = [
                            <NavItem>
                                <Link className="text-decoration-none text-light"><SignOutButton/></Link>
                            </NavItem>
]

class SiteNavigation extends React.Component {
    render(){
        return(
            <div className="bg-success">
                <Container>
                    <Navbar className="navbar-light" dark>
                        <Link to={ROUTES.HOME}><NavbarBrand >drawThing</NavbarBrand></Link>
                        <Nav className="ml-auto align-items-center">
                            <NavItem>
                            <SmallUserDetails light/>
                            </NavItem>
                            {!this.props.authUser &&
                            REGISTRATION_LINKS
                            }
                            {this.props.authUser &&
                                LOGGED_IN_LINKS
                            }
                        </Nav>
                    </Navbar>
                </Container>
            </div>
        )
    }
}
export default compose(withAuthentication,
                        connect((state, props) => ({
                            user: state.firestore.ordered.currUser && state.firestore.ordered.currUser[0],
                        })),
                        firestoreConnect((props) => {
                            let firestoreQuery = []
                            props.user && firestoreQuery.push({collection: 'users', where: [props.firebase.firestore.FieldPath.documentId(),'in', Object.keys(props.user.following)], storeAs: 'following'});
                            props.authUser && firestoreQuery.push({collection: 'users', doc: props.authUser.uid, storeAs: 'currUser'})
                            return firestoreQuery
                        }))(SiteNavigation)