import React from 'react';
import Canvas from './Canvas';
import {Button} from 'reactstrap';
import Post from '../models/Post';
import {compose} from 'redux';
import {withAuthentication} from '../Session'
import {withFirebase} from '../Firebase'


class PostCreator extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            postError: null
        }
        this.submitPost = this.submitPost.bind(this)
    }

    submitPost(imageData){
        let imageTitle = this.props.authUser.uid.toString() + Date.now().toString()
        this.props.firebase.doUploadFileReturnURL(imageData, `/posts/${imageTitle}`)
        .then((downloadURL) => {
            let post = new Post(this.props.authUser.uid, downloadURL)
            this.props.firebase.doUploadPost(this.props.authUser.uid, post)
        })
        .catch((error) => {
            this.setState({postError: error})
        })
    }

    render(){
        return (
            <div>
                <Canvas onSubmit={this.submitPost}></Canvas>
                {this.state.postError && this.state.postError}
            </div>
        )
    }
}

export default compose(withAuthentication, withFirebase)(PostCreator);