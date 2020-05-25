import React from 'react';
import {Container, Row} from 'reactstrap'
import PostCreator from '../../Components/PostCreator'
import {withAuthentication, withAuthorization} from '../../Session'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'

class HomePageBase extends React.Component {

    render(){
        return (
            <Container>
                <Row>
                    <PostCreator/>
                </Row>
            </Container>
        )
    }
}

const condition = authUser => !!authUser;

const HomePage = compose(
    firestoreConnect(() => ['users']),
    connect((state, props) => ({
        users: state.firestore.ordered.users
      })),
    withAuthentication,
    withAuthorization(condition),
)(HomePageBase);

export default HomePage;
