import React from 'react';
import {Row, Container, Col} from 'reactstrap'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {withAuthentication} from '../../Session'
import Spinner from '../../Components/Spinner'

class PostDisplayBase extends React.Component {

    render(){
        const {post, user} = this.props;
        const postDate = new Date(post.time_created)
        const postDateString = `${postDate.getDate()}-${postDate.getMonth()}-${postDate.getFullYear()}`
        if(post){
            return (
                <Row>
                    <Container>
                        <Row sm="6" className="my-2 justify-content-start align-items-center">
                            <Col sm="1">
                                <img className="img-thumbnail img-fluid" src={user.ppURL}/>
                            </Col>
                            <Col>
                                <span className="font-weight-bold text-success"> Posted by </span>{user.displayName}
                            </Col>
                            <Col>
                                <span className="font-weight-light"> {postDateString}</span>
                            </Col>
                        </Row>
                        <Row>
                        <img className="img-thumbnail" src={post.image}/>
                        </Row>
                    </Container>
                </Row>
            )
        }
        else{
            return (
                <Spinner/>
            )
        }
    }
}


const PostDisplay = compose(
    withAuthentication,
)(PostDisplayBase);

export default PostDisplay
