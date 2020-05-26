import React from 'react';
import {withFirebase} from '../Firebase';
import {compose} from 'redux';

const SignOutButton = ({ firebase }) => (
    <span onClick={firebase.doSignOut}>
      Sign Out
    </span>
);

export default compose(withFirebase)(SignOutButton);