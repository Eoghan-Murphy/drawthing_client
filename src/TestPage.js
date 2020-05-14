import React from 'react';
import {Container, Row} from 'reactstrap'
import Canvas from './Canvas'

class TestPage extends React.Component {

    render(){
        return (
            <Container>
                <Row>
                    <Canvas/>
                </Row>
            </Container>
        )
    }
}

export default TestPage;
