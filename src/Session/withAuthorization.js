import React from 'react';
import {withRouter} from 'react-router-dom';
import {compose} from 'redux';
import {withAuthentication} from './';
import {withFirebase} from '../Firebase';
import * as ROUTES from '../routes'

const withAuthorization = condition => Component => {
    class withAuthorization extends React.Component {

        componentDidMount(){
            this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
                if(!condition(authUser)){
                    this.props.history.push(ROUTES.SIGN_IN)
                }
            })
        }

        componentWillUnmount(){
            this.listener();
        }
        render(){
            const renderedComponent = condition(this.props.authUser) ? <Component {...this.props}/> : null
            return (
                renderedComponent
            )
        }
    }

    return compose(
        withRouter,
        withFirebase,
        withAuthentication,
    )(withAuthorization);
};

export default withAuthorization;