import React from 'react'
import './Team.css'
import { Container, Row, Col, Button} from 'react-bootstrap'

class Team extends React.Component {
    state = {  }
    render() { 
        return (
            <div>
                <h2 className="subheader" >Our Team</h2>
                <Container className="project-grid">
                    <Row>
                        <Col> 
                                <img className="album-icon" src="https://cdn.vox-cdn.com/thumbor/jZ8sKeNf5uGO3nN2nzrnNr5yNQQ=/0x40:960x680/1200x800/filters:focal(0x40:960x680)/cdn.vox-cdn.com/uploads/chorus_image/image/10416343/lebronnn.0.jpg" alt="" />
                                <h5 className="album-detail">Person</h5>
                                <h6 style={{color: "white"}}>Role</h6>
                        </Col>
                        <Col>
                            <img className="album-icon" src="https://cdn.vox-cdn.com/thumbor/jZ8sKeNf5uGO3nN2nzrnNr5yNQQ=/0x40:960x680/1200x800/filters:focal(0x40:960x680)/cdn.vox-cdn.com/uploads/chorus_image/image/10416343/lebronnn.0.jpg" alt="" />
                            <h5 className="album-detail">Person</h5>
                            <h6 style={{color: "white"}}>Role</h6>                        
                        </Col>

                    </Row>
                
                </Container>

            </div>
        );
    }
}


export default Team;