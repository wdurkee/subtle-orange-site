import React from "react";
import "./Home.css";
import { Carousel, Container, Row, Col } from "react-bootstrap";

class Home extends React.Component {
  state = {};
  render() {
    return (
      <div className="home-container">
        
        <h2 className="subheader">Announcement</h2>
        <p>New music releasing on 12/12/12!</p>
        <Container className="project-grid">
                    <Row>
                        <Col>
                            <a href="https://spotify.com">
                                <img className="album-icon anchor-album" src="https://upload.wikimedia.org/wikipedia/en/9/98/Phoenix_-_Bankrupt%21_cover.png" alt="" />
                                <h5 className="album-detail">Some content</h5>
                            </a>
                        </Col>
                    </Row>
                    
                </Container>
        <Carousel className="home-carousel">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="orange-grove.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>FIRST SLIDE</h3>
              <p>description.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="orange-grove.jpg"
              alt="Third slide"
            />

          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="orange-grove.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>THIRD SLIDE</h3>
              <p>
               description.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Home;
