import React from 'react';
import {Container, Row} from 'reactstrap'
import PostCreator from './PostCreator'

class TestPage extends React.Component {

    render(){
        return (
            <Container>
                <Row>
                    <PostCreator/>
                </Row>
            </Container>
        )
    }
}

export default TestPage;
