import React from 'react';
import {withAuthentication} from '../../Session';
import {withFirebase} from '../../Firebase';
import {compose} from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import ProfileImage from '../ProfileImage';
import {Row, Col} from 'reactstrap'
import Spinner from '../Spinner'

class SmallUserDetails extends React.Component {

    render(){
        return(
            <div>
            {this.props.user ?
            <Row className={"align-items-center" + (this.props.light && ' text-light')}>
                <Col>
                    <ProfileImage imageURL={this.props.user.ppURL}/>
                </Col>
                <Col>
                    {this.props.user.displayName}
                </Col>
            </Row>
            : <Spinner light />
            }
            </div>
        );
    }

}

export default compose(
    withFirebase,
    withAuthentication,
    firestoreConnect((props)=> [
        { collection: 'users', doc: props.authUser && props.authUser.uid}
    ]),
    connect(({firestore: {data}}, props) => ({
         user: data.users && props.authUser && data.users[props.authUser.uid]
    }))
    )
                        (SmallUserDetails)