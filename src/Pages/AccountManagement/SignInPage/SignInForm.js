import React from 'react';
import {withFirebase} from '../../../Firebase';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import {withRouter} from 'react-router-dom';
import * as ROUTES from '../../../routes';
import {compose} from 'redux'

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null
}

class SignInFormBase extends React.Component {


    constructor(props){
        super(props)
        this.state = INITIAL_STATE

        this.handleFormInputChange = this.handleFormInputChange.bind(this)
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
    }

    handleFormInputChange(event){
        this.setState({[event.target.name]: event.target.value})
    }

    handleFormSubmit(event){

        this.props.firebase.doSignInWithEmailAndPassword(this.state.email, this.state.password)
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
        const {email, password, error} = this.state;
        const isInvalid = !email || !password;

        return (
            <div>
            <Form onSubmit={this.handleFormSubmit}>
                <FormGroup>
                    <Label for="userEmail">Email</Label>
                    <Input type="email" name="email" id="userEmail" onChange={this.handleFormInputChange}/>
                </FormGroup>
                <FormGroup>
                    <Label for="userPassword">Password</Label>
                    <Input type="password" name="password" id="userPassword" onChange={this.handleFormInputChange}/>
                </FormGroup>
                <Button disabled={isInvalid}>Log In</Button>
            </Form>
            {error && <p>{error.message}</p>}
            </div>
        )
    }
}

const SignInForm = compose(withRouter, withFirebase)(SignInFormBase)

export default SignInForm;