import React from 'react';
import {withFirebase} from '../../../Firebase';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import {withRouter} from 'react-router-dom';
import * as ROUTES from '../../../routes'

const INITIAL_STATE = {
    email: '',
    password: '',
    confirmPassword: '',
    displayName: '',
    error: null
}

class RegisterFormBase extends React.Component {


    constructor(props){
        super(props)
        this.state = {...INITIAL_STATE}

        this.handleFormInputChange = this.handleFormInputChange.bind(this)
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
    }

    handleFormInputChange(event){
        this.setState({[event.target.name]: event.target.value})
    }

    handleFormSubmit(event){

        this.props.firebase.doCreateUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(authUser => {
            this.setState({...INITIAL_STATE});
            this.props.history.push(ROUTES.HOME);
        })
        .catch(error => {
            this.setState({error});
        })

        event.preventDefault();
    }

    

    render(){
        const {email, password, confirmPassword, displayName, error} = this.state

        const isInvalid =
            password !== confirmPassword ||
            password === '' ||
            email === '' ||
            displayName === '';

        return (
            <div>
            <Form onSubmit={this.handleFormSubmit}>
                <FormGroup>
                    <Label for="userEmail">Email</Label>
                    <Input type="email" name="email" id="userEmail" onChange={this.handleFormInputChange}/>
                </FormGroup>
                <FormGroup>
                    <Label for="userDisplayName">Display Name</Label>
                    <Input type="text" name="displayName" id="userDisplayName" onChange={this.handleFormInputChange}/>
                </FormGroup>
                <FormGroup>
                    <Label for="userPassword">Password</Label>
                    <Input type="password" name="password" id="userPassword" onChange={this.handleFormInputChange}/>
                </FormGroup>
                <FormGroup>
                    <Label for="userConfirmPassword">Confirm Password</Label>
                    <Input type="password" name="confirmPassword" id="userConfirmPassword" onChange={this.handleFormInputChange}/>
                </FormGroup>
                <Button disabled={isInvalid}>Submit</Button>
            </Form>
            {error && <p>{error.message}</p>}
            </div>
        )
    }
}

const RegisterForm = withRouter(withFirebase(RegisterFormBase))

export default RegisterForm;