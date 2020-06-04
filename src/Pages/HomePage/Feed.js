import React from 'react';
import {Container} from 'reactstrap'
import PostDisplay from './PostDisplay'
import {withAuthentication} from '../../Session'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'

class FeedBase extends React.Component {

    render(){
        return (
            <Container>
                {this.props.posts && this.props.posts.map((post) => <PostDisplay post={post} user={this.props.users[post.user]}/>)}
            </Container>
        )
    }
}

const Feed = compose(
    withAuthentication,
    firestoreConnect((props) => [{collection: 'posts', where: ['user','in', Object.keys(props.users)]}]),
    connect((state, props) => ({
        posts: state.firestore.ordered.posts,
      })),
)(FeedBase);

export default Feed;
