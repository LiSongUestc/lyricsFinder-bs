import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Spinner, Card, ListGroup, Row } from "react-bootstrap";
import Moment from "react-moment";

const Lyrics = props => {
  const [track, setTrack] = useState({});
  const [lyrics, setLyrics] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then(res => {
        // let lyrics = res.data.message.body.lyrics;
        setLyrics(res.data.message.body.lyrics);

        return axios.get(
          `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=${props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`
        );
      })
      .then(res => {
        // let track = res.data.message.body.track;
        setTrack(res.data.message.body.track);
      })
      .catch(err => console.log(err));
  }, [props.match.params.id]);
  if (
    track === undefined ||
    lyrics === undefined ||
    Object.keys(track).length === 0 ||
    Object.keys(lyrics) === 0
  ) {
    return (
      <Row className="justify-content-center mt-4">
        <Spinner animation="border" />
      </Row>
    );
  } else
    return (
      <>
        <Link to="/" className="btn btn-dark mb-4 mt-2">Back</Link>
        <Card>
          <Card.Header as="h5">
            {track.track_name} by{" "}
            <span className="text-secondary">{track.artist_name}</span>
          </Card.Header>
          <Card.Body>
            <Card.Text>{lyrics.lyrics_body}</Card.Text>
          </Card.Body>
        </Card>
        <ListGroup>
          <ListGroup.Item>
            <strong>Album Id</strong>: {track.album_id}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Song Genre</strong>:{" "}
            {track.primary_genres.music_genre_list.length === 0
              ? "NO GENRE AVAILABLE"
              : track.primary_genres.music_genre_list[0].music_genre
                  .music_genre_name}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Explicit Words</strong>:{" "}
            {track.explicit === 0 ? "No" : "Yes"}
          </ListGroup.Item>
          <ListGroup.Item>
            <Moment format="MM/DD/YYYY">{track.updated_time}</Moment>
          </ListGroup.Item>
        </ListGroup>
      </>
    );
};
export default Lyrics;
