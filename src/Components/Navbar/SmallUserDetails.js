import React from 'react';
import {withAuthentication} from '../../Session';
import {withFirebase} from '../../Firebase';
import SignOutButton from '../SignOutButton';

class SmallUserDetails extends React.Component {
    render(){
        return(
            <div>
            {this.props.authUser &&
            <div className={this.props.light && 'text-light'}>
                {this.props.authUser.email}
                <SignOutButton/>
            </div>
            }
            </div>
        );
    }

}

export default withAuthentication(withFirebase(SmallUserDetails));