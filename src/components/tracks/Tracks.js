import React, { useContext } from "react";
import { Context } from "../../context";
import Track from "../tracks/Track";
import { Row, Spinner } from "react-bootstrap";

export default function Tracks() {
  const [state] = useContext(Context);
  const { track_list, heading } = state;
  if (track_list === undefined) {
    return (
      <Row className="justify-content-center">
        <Spinner animation="border"/>
      </Row>
    );
  }else if(track_list.length === 0){
    return (
      <Row className="justify-content-center">
        <Spinner animation="border"/>
      </Row>
    )
  } else
    return (
      <>
        <h3 className="text-center mb-4">{heading}</h3>
        <Row>
          {track_list.map(item => (
            <Track key={item.track.track_id} track={item.track} />
          ))}
        </Row>
      </>
    );
}
