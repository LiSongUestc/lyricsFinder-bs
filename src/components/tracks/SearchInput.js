import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Context } from "../../context";
import { Card, Form, Col, Button } from "react-bootstrap";
export default function SearchInput() {
  const [state, setState] = useContext(Context);
  const [userInput, setUserInput] = useState("");
  const [trackTitle, setTrackTitle] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then(res => {
        let track_list = res.data.message.body.track_list;
        if (trackTitle === "") setState({ heading:'Top 10 Tracks', track_list: track_list });
        else setState({ track_list: track_list, heading: "Search Result" });
      })
      .catch(err => console.log(err));
  }, [trackTitle]);

  const findTrack = e => {
    e.preventDefault();
    setTrackTitle(userInput);
  };

  const onChange = e => {
    setUserInput(e.target.value);
  };

  return (
    <Card className="mb-4 p-5">
      <Card.Header className="text-center display-4">
        <i className="fa fa-music" /> Search For A Song
      </Card.Header>
      <Card.Body>
        <Card.Title className="text-center lead pb-4">
          Get the lyrics for any song
        </Card.Title>
        <Card.Text>
          <Form onSubmit={findTrack}>
            <Form.Row>
              <Col sm={{ offset: 3, span: 6 }}>
                <Form.Group controlId="formBasicSearch">
                  <Form.Control
                    type="text"
                    value={userInput}
                    onChange={onChange}
                    placeholder="Enter Song Title..."
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Button type="submit">Search</Button>
                </Form.Group>
              </Col>
            </Form.Row>
          </Form>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
