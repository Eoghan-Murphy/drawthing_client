import React from 'react';
import {withAuthentication} from '../../Session';
import {withFirebase} from '../../Firebase';
import SignOutButton from '../SignOutButton';
import {compose} from 'redux'

class SmallUserDetails extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            pp: null
        }

        this.setProfilePic = this.setProfilePic.bind(this)
    }

    setProfilePic(){
        this.props.firebase.doGetProfilePic(this.props.authUser.uid)
        .then((imgURL) => {
            this.setState({pp: imgURL})
        })
    }

    render(){

        if(!this.state.pp && this.props.authUser){
            this.setProfilePic()
        }

        console.log(this.props)
        return(
            <div>
            {this.props.authUser &&
            <div className={this.props.light && 'text-light'}>
                <img src={this.state.pp}/>
                {this.props.authUser.email}
                <SignOutButton/>
            </div>
            }
            </div>
        );
    }

}

export default compose(withFirebase,withAuthentication)
                        (SmallUserDetails)