import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Track = props => {
  const { track } = props;
  return (
    <Col md={6} className="mb-4">
      <Card>
        <Card.Header>{track.artist_name}</Card.Header>
        <Card.Body>
          <Card.Text>
            <strong>
              <i className="fa fa-play-circle" />
              Track :
            </strong>
            {track.track_name}
            <br />
            <strong>
              <i className="fa fa-circle" />
              Album :
            </strong>
            {track.album_name}
          </Card.Text>
          <Link 
            to={`lyrics/track/${track.track_id}`}
            className="btn btn-dark btn-block"
          >
            <i className="fa fa-chevron-right" /> View Lyrics
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Track;
