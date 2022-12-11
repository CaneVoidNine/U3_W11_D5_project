import "../css/welcome.css";
import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import { fetchAlbums } from "../redux/actions/action";
import { fetchArtists } from "../redux/actions/action";
import SongCard from "./Single";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import SecCard from "./SecCard";

export default function MyCards() {
  const dispatch = useDispatch();
  const albumDisplay = useSelector((state) => state.getAlbums.albumList);
  const artistDisplay = useSelector((state) => state.getArtists.artistList);
  useEffect(() => {
    dispatch(fetchAlbums());
    dispatch(fetchArtists());
  }, []);
  return (
    <div id="col-10" className="pl-5">
      <div className="row">
        <div className="col d-flex justify-content-start">
          <div className="prev-next-buttons">
            <button type="button">
              <i className="bi bi-chevron-left" />
            </button>
            <button type="button">
              <i className="bi bi-chevron-right" />
            </button>
          </div>
        </div>

        {/*Account*/}
        <div className="col d-flex justify-content-end mr-3 mt-3">
          <div className="accountInfo d-flex rounded-pill p-1 mt-2 mr-2">
            <div className="profilePhotoDiv rounded-circle mr-1">
              <img
                src="https://image.shutterstock.com/mosaic_250/2780032/1770074666/stock-photo-head-shot-of-african-self-assured-executive-manager-portrait-successful-staff-member-company-1770074666.jpg"
                alt="Profile Foto"
                className="profileImg"
              />
            </div>
            <div className="profileName text-white align-self-center pl-1 pr-1">
              Alexander Spomer
            </div>
            <div className="profileArrowDown text-white align-self-center pl-1 pr-1">
              <i className="bi bi-caret-down-fill" />
            </div>
          </div>
        </div>
      </div>

      {/*Cards*/}
      <div className="row mt-5 scrollit">
        <div className="row" id="cardstart">
          <h3 className="col-12 mb-4 d-flex">Good Morning</h3>

          {albumDisplay.slice(0, 8).map((song) => (
            <SongCard song={song} />
          ))}
        </div>
        <div className="row  mt-3" id="mainrow">
          <h2 className="col-12 mb-4 d-flex">Recently Played</h2>
          <div className="col-12 pl-3 row" id="firstAlbumRow">
            {artistDisplay.slice(0, 6).map((artist) => (
              <SecCard artist={artist} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
