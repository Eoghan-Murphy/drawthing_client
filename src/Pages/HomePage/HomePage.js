import React from 'react';
import {Container, Row} from 'reactstrap'
import PostCreator from '../../Components/PostCreator'
import {withAuthentication} from '../../Session'

class HomePage extends React.Component {

    render(){
        console.log(this.props)
        return (
            <Container>
                <Row>
                    <PostCreator/>
                </Row>
            </Container>
        )
    }
}

export default withAuthentication(HomePage);
