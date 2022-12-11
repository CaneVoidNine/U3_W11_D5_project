import React from "react";
import { Link } from "react-router-dom";

export default function SecCard({ artist }) {
  return (
    <div className="albumCard">
      <Link to="/artist">
        <img
          className="col-11"
          src={artist.artist.picture_big}
          alt={artist.artist.name}
        />
        <div className="albumText">
          <p>{artist.artist.name}</p>
          <p>{artist.title}</p>
        </div>
      </Link>
    </div>
  );
}
