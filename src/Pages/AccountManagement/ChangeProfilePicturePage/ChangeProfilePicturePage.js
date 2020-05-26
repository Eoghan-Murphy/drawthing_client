import React from 'react';
import {Container} from 'reactstrap';
import Canvas from '../../../Components/Canvas'
import {withFirebase} from '../../../Firebase'
import {withAuthentication} from '../../../Session'
import {compose} from 'redux'

class ChangeProfilePicturePage extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            ppError: null
        }
        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(imageBlob){
        this.props.firebase.doSetProfilePic(this.props.authUser.uid, imageBlob)
        .then( () => {
            this.props.firebase.doGetProfilePic(this.props.authUser.uid)
            .then( (url) => {
                this.props.firebase.doSetFieldUser(this.props.authUser.uid, 'ppURL', url)
            }
            )
        }
        )
        .catch((error) => {this.setState({ppError: error})})
    }

    render(){
        return (
            <Container id="test">
                <Canvas width={128} height={128} onSubmit={this.onSubmit}></Canvas>
                {this.state.ppError && <p>{this.state.ppError}</p>}
            </Container>
        )
    }
}

export default compose(withFirebase, withAuthentication)(ChangeProfilePicturePage);
