import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Test() {
  return (
    <div>
        <i class="fa fa-car"></i>
      <Button variant="light" block>
        
        <Link to={`lyrics/track`}>
          <i className="fa fa-chevron-right" /> View Lyrics
        </Link>
      </Button>
      <br />
      <Link to={`lyrics/track`} className="btn btn-dark btn-block">
        <i className="fa fa-chevron-right" /> View Lyrics
      </Link>
    </div>
  );
}
