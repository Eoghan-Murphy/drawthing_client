import React from 'react';
import {Button} from 'reactstrap';
import {withFirebase} from '../Firebase';
import {compose} from 'redux';

const SignOutButton = ({ firebase }) => (
    <Button onClick={firebase.doSignOut}>
      Sign Out
    </Button>
);

export default compose(withFirebase)(SignOutButton);