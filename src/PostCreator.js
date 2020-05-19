import React from 'react';
import Canvas from './Canvas';
import {Button} from 'reactstrap';
import Post from './models/Post';

class PostCreator extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            canvasRef: null
        }
        this.setCanvasReference = this.setCanvasReference.bind(this);
        this.submitPost = this.submitPost.bind(this)
    }

    setCanvasReference(canvasRef) {
        this.setState({canvasRef: canvasRef.current});
    }

    submitPost(){
        if(this.state.canvasRef){
            const post = new Post('test_user', 'test_image')
            post.submit()
        }
    }

    render(){
        return (
            <div>
                <Canvas setCanvasReference = {this.setCanvasReference}></Canvas>
                <Button onClick = {this.submitPost}>Submit Post</Button>
            </div>
        )
    }
}

export default PostCreator;