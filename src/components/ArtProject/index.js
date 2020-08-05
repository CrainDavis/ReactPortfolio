import React from "react";
import "../../App.css";
import { Card, Col } from "react-bootstrap";
import Lightbox from "react-image-lightbox";

import fourSeasons from "../../utils/images/art-images/4seasons.png";
import gradientLandscape from "../../utils/images/art-images/gradient-landscape-1.png";
import eeveelutions from "../../utils/images/art-images/eeveelutions.png";

import "../ArtProject/index.css";

const images = [fourSeasons, gradientLandscape, eeveelutions];

class ArtProject extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;
    return (
      <>
        <Col xs={12} md={6} lg={4} xl={3} className="mb-3">
          <Card key={this.props.artProject.id} className="h-100">
            <Card.Img
              variant="top"
              className="art-img"
              src={images[this.props.artProject.num]}
              onClick={() =>
                this.setState({
                  photoIndex: this.props.artProject.num,
                  isOpen: true,
                })
              }
            />
            <Card.Body>
              <Card.Title>{this.props.artProject.img_title}</Card.Title>
              <Card.Text className="project-desc">
                <p style={{ fontSize: "75%" }} className="card-text">
                  {this.props.artProject.description}
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            onCloseRequest={() => this.setState({ isOpen: false })}
          />
        )}
      </>
    );
  }
}

export default ArtProject;