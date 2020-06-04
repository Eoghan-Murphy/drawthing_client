import React from 'react';
import {Container, Row} from 'reactstrap'
import PostCreator from '../../Components/PostCreator'
import {withAuthentication, withAuthorization} from '../../Session'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import Feed from './Feed'

class HomePageBase extends React.Component {

    render(){
        let feedUsers = this.props.following;
        if(this.props.currUser){
            feedUsers[this.props.currUser.id] = this.props.currUser
        }
        return (
            <Container>
                <Row>
                    <PostCreator/>
                    {Object.keys(feedUsers).length != 0 && <Feed users={feedUsers}/>}
                </Row>
            </Container>
        )
    }
}

const condition = authUser => !!authUser;

const processUserData = (userList) => {
    if(!userList){
        return {}
    }
    let users = {}
    userList.forEach((user) => users[user.id] = user)
    return users
}


const HomePage = compose(
    withAuthentication,
    withAuthorization(condition),
    connect((state, props) => ({
        following: processUserData(state.firestore.ordered.following),
        currUser: state.firestore.ordered.currUser && state.firestore.ordered.currUser[0]
      })),
)(HomePageBase);

export default HomePage;
