import React from 'react';
import {withAuthentication} from '../../Session';
import {withFirebase} from '../../Firebase';
import {compose} from 'redux';
import { connect } from 'react-redux';
import ProfileImage from '../ProfileImage';
import {Row, Col} from 'reactstrap'
import Spinner from '../Spinner'

class SmallUserDetails extends React.Component {

    render(){
        return(
            <div>
            {this.props.authUser && this.props.currUser &&
            <Row className={"align-items-center" + (this.props.light && ' text-light')}>
                <Col>
                    <ProfileImage imageURL={this.props.currUser.ppURL}/>
                </Col>
                <Col>
                    {this.props.currUser.displayName}
                </Col>
            </Row>
            }
            </div>
        );
    }

}

export default compose(
    withFirebase,
    withAuthentication,
    connect((state, props) => ({
         currUser: state.firestore.ordered.currUser ? state.firestore.ordered.currUser[0] : null
    }))
    )
                        (SmallUserDetails)