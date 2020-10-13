import React from 'react'
import './TourDates.css'
import { Container, Row, Col, Button} from 'react-bootstrap'

class TourDates extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h2 className="subheader">Tour Dates</h2>

                <Container>
                    <Row className="tour-row">
                        <Col className="date">12/12/12</Col>
                        <Col className="location">
                            <span className="theater">Theather</span><br />
                            Los Angeles, CA
                        </Col>
                        <Col>
                            <Button className="ticket-button" variant="outline-warning">Buy Tickets</Button>
                        </Col>
                    </Row>
                    <Row className="tour-row">
                        <Col className="date">12/12/12</Col>
                        <Col className="location">
                            <span className="theater">Theather</span><br />
                            Los Angeles, CA
                        </Col>
                        <Col>
                            <Button className="ticket-button" variant="outline-warning">Buy Tickets</Button>
                        </Col>
                    </Row>
                    <Row className="tour-row">
                        <Col className="date">12/12/12</Col>
                        <Col className="location">
                            <span className="theater">Theather</span><br />
                            Los Angeles, CA
                        </Col>
                        <Col>
                            <Button className="ticket-button" variant="outline-warning">Buy Tickets</Button>
                        </Col>
                    </Row>
                    <Row className="tour-row">
                        <Col className="date">12/12/12</Col>
                        <Col className="location">
                            <span className="theater">Theather</span><br />
                            Los Angeles, CA
                        </Col>
                        <Col>
                            <Button className="ticket-button" variant="outline-warning">Buy Tickets</Button>
                        </Col>
                    </Row>
                    <Row className="tour-row">
                        <Col className="date">12/12/12</Col>
                        <Col className="location">
                            <span className="theater">Theather</span><br />
                            Los Angeles, CA
                        </Col>
                        <Col>
                            <Button className="ticket-button" variant="outline-warning">Buy Tickets</Button>
                        </Col>
                    </Row>
                    
                </Container>
            </div>
         );
    }
}
 
export default TourDates;