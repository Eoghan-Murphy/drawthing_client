import React from 'react';
import {Container} from 'reactstrap';
import SignInForm from './SignInForm'

class SignInPage extends React.Component {

    render(){
        return (
            <Container>
                <SignInForm/>
            </Container>
        )
    }
}

export default SignInPage;