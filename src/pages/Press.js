import React from 'react'
import './Press.css'
import { Container, Row, Col } from 'react-bootstrap'

class Press extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h2 className="subheader">Subtle Orange in the Press</h2>
                <Container className="press-grid">
                    <Row className="press-row">
                        <Col className="image-col">
                            <a className="press-anchor" href="https://cnn.com">
                                <img className="press-image" src="https://upload.wikimedia.org/wikipedia/en/9/98/Phoenix_-_Bankrupt%21_cover.png" alt="" />
                            </a>
                        </Col>
                        <Col className="text-col">
                           <a className="press-anchor" href="cnn.com">
                                <span className="press-headline">Press Article Headline</span> <br/>
                                <span className="press-date">Article Date</span> <br/>
                                <span className="press-detail">Article Detail</span>
                            </a>
                        </Col>
                        
                    </Row>

                    <Row className="press-row">
                        <Col className="image-col">
                            <a href="https://cnn.com">
                                <img className="press-image" src="https://upload.wikimedia.org/wikipedia/en/9/98/Phoenix_-_Bankrupt%21_cover.png" alt="" />
                            </a>
                        </Col>
                        <Col className="text-col">
                           <a className="press-anchor" href="cnn.com">
                                <p className="press-headline">Press Article Headline</p>
                                <p className="press-date">Article Date</p>
                                <p className="press-detail">Article Detail</p>
                            </a>
                        </Col>
                        
                    </Row>

                    <Row className="press-row">
                        <Col className="image-col">
                            <a href="https://cnn.com">
                                <img className="press-image" src="https://upload.wikimedia.org/wikipedia/en/9/98/Phoenix_-_Bankrupt%21_cover.png" alt="" />
                            </a>
                        </Col>
                        <Col className="text-col">
                           <a className="press-anchor" href="cnn.com">
                                <p className="press-headline">Press Article Headline</p>
                                <p className="press-date">Article Date</p>
                                <p className="press-detail">Article Detail</p>
                            </a>
                        </Col>
                        
                    </Row>
                </Container>

            </div>
         );
    }
}
 
export default Press;