import React from 'react';
import {Container} from 'reactstrap';
import RegisterForm from './RegisterForm';

class RegistrationPage extends React.Component {

    render(){
        return (
            <Container>
                <RegisterForm/>
            </Container>
        )
    }
}

export default RegistrationPage;
