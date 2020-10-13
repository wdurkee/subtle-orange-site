import React from 'react'
import './Music.css'
import { Container, Row, Col } from 'react-bootstrap'

class Music extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
                
                <h2 className="subheader" >Projects</h2>
                <Container className="project-grid">
                    <Row>
                        <Col>
                            <a href="https://spotify.com">
                                <img className="album-icon anchor-album" src="https://upload.wikimedia.org/wikipedia/en/9/98/Phoenix_-_Bankrupt%21_cover.png" alt="" />
                                <h5 className="album-detail">Album Name</h5>
                            </a>
                        </Col>
                        <Col>
                            <a href="https://spotify.com">
                                <img className="album-icon" src="https://upload.wikimedia.org/wikipedia/en/9/98/Phoenix_-_Bankrupt%21_cover.png" alt="" />
                                <h5 className="album-detail">Album Name</h5>
                            </a>
                        </Col>

                    </Row>
                    <Row>
                        <Col>
                        <a href="https://spotify.com">
                                <img className="album-icon" src="https://upload.wikimedia.org/wikipedia/en/9/98/Phoenix_-_Bankrupt%21_cover.png" alt="" />
                                <h5 className="album-detail">Album Name</h5>
                        </a>
                        </Col>
                        <Col>
                            <a href="https://spotify.com">
                                <img className="album-icon" src="https://upload.wikimedia.org/wikipedia/en/9/98/Phoenix_-_Bankrupt%21_cover.png" alt="" />
                                <h5 className="album-detail">Album Name</h5>
                            </a>
                        </Col>
                        <Col>
                            <a href="https://spotify.com">
                                <img className="album-icon" src="https://upload.wikimedia.org/wikipedia/en/9/98/Phoenix_-_Bankrupt%21_cover.png" alt="" />
                                <h5 className="album-detail">Album Name</h5>
                            </a>
                        </Col>
                    </Row>
                </Container>


                <h2 className="subheader" >Links</h2>
                <div>
                    <a href="https://spotify.com"><img className="music-icon" src="spotify.png" alt="" /></a>
                    <a href="https://youtube.com"><img className="music-icon" src="youtube.png" alt="" /></a>
                    <a href="https://apple.com"><img className="music-icon" src="applemusic.png" alt="" /></a>
                    <a href="https://soundcloud.com"><img className="music-icon" src="soundcloud.svg" alt="" /></a>
                </div>
            </div>
         );
    }
}
 
export default Music;