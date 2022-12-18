import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "../css/artist.css";
export default function MyArtist() {
  const params = useParams();
  const artistID = params.artistId;
  const [artistData, setartistData] = useState();
  const [tracklist, setTracklist] = useState();
  useEffect(() => {
    gettingartist();
  }, []);
  let gettingartist = async () => {
    const response = await fetch(
      `https://striveschool-api.herokuapp.com/api/deezer/artist/${artistID}`
    );
    const artist = await response.json();
    console.log(artist);
    setartistData(artist);
    console.log(artistData);
    const trackData = await artist.tracklist;
    const response2 = await fetch(trackData);
    const data = await response2.json();
    setTracklist(data);
    console.log(tracklist);
  };
  return (
    <div className=" px-0" id="main-container">
      {/* Image Header Row */}
      <div className="row">
        <img src={artistData?.picture_big} alt="..." id="main-image" />
        <div className="ml-5" id="text-container">
          <div className="d-flex mr-0 pr-0">
            <i className="bi bi-patch-check-fill" id="verified-btn" />
            <p className="lead">Verified artist</p>
          </div>
          <h1 className="d-flex mt-0">{artistData?.name} </h1>
          <p className="mt-3" id="monthly-listeners">
            {artistData?.nb_fan} monthly listeners
          </p>
        </div>
      </div>
      {/* Playlist  */}
      <div className="row mr-0">
        <div className="col-12 mr-0 pl-0" id="playlist-container">
          <div className="row d-flex">
            <div
              id="change-button"
              className="pauseButton mr-3 ml-5 rounded-circle text-white d-flex align-items-center"
            >
              <i
                onclick="buttonChange()"
                className="bi bi-play-circle-fill col-2 mr-4"
                id="pause-button"
              />
            </div>
            <div id="following">
              <p
                className="d-inline border mr-4"
                style={{ marginBlock: "auto" }}
                id="follow"
                onclick="addColor()"
              >
                Follow
              </p>
            </div>
            <p className="d-inline" style={{ marginBlock: "auto" }} id="dots">
              <i className="bi bi-three-dots" />
            </p>
          </div>
          <div className="col-10" id="playlist-row">
            <div className="row mt-5 ml-3" id="playlist">
              <div className="col-12 d-flex mb-4">
                <h2 className="col-sm-12 col-md-12 col-l-10 mx-0 px-0">
                  Popular
                </h2>
                <h2 className="col-2 px-0" id="tag-pick">
                  Artist Pick
                </h2>
              </div>
              <div className="col-12 d-flex pl-0" id="playlist-column">
                <ul
                  className="list-group col-sm-12 col-md-12 col-l-10 pb-0"
                  id="playlist-list"
                >
                  <li className="list-group-item align-items-center justify-content-between pl-0 d-flex pb-0 play-song">
                    <p className="col-md-1">1</p>
                    <img
                      className="col-md-2 album-list-cover band-pic"
                      src={artistData?.picture}
                      alt=""
                    />
                    <p
                      className="col-sm-6 col-md-3 track-title"
                      id="test-band-name"
                    >
                      {tracklist?.data[0]?.title}
                    </p>
                    <p className="col-md-3 rank" id="test-rank">
                      1,013,238,772
                    </p>
                    <p className="col-md-3 duration" id="test-duration">
                      {tracklist?.data[0]?.duration}
                    </p>
                  </li>
                  <li className="list-group-item align-items-center justify-content-between pl-0 d-flex pb-0 play-song">
                    <p className="col-md-1">2</p>
                    <img
                      className="col-md-2 album-list-cover band-pic"
                      src={artistData?.picture}
                      alt=""
                    />
                    <p className="col-sm-6 col-md-3 track-title">
                      {tracklist?.data[1]?.title}
                    </p>
                    <p className="col-md-3 rank">1,497,986,258</p>
                    <p className="col-md-3 duration">
                      {tracklist?.data[1]?.duration}
                    </p>
                  </li>
                  <li className="list-group-item align-items-center justify-content-between pl-0 d-flex pb-0 play-song">
                    <p className="col-md-1">3</p>
                    <img
                      className="col-md-2 album-list-cover band-pic"
                      src={artistData?.picture}
                      alt=""
                    />
                    <p className="col-sm-6 col-md-3 track-title">
                      {tracklist?.data[2]?.title}
                    </p>
                    <p className="col-md-3 rank">1,063,959,983</p>
                    <p className="col-md-3 duration">
                      {tracklist?.data[2]?.duration}
                    </p>
                  </li>
                </ul>
                <ul
                  className="list-group col-2 pb-0"
                  id="playlist-current-track"
                >
                  <li className="list-group-item pl-0" id="artist-pick">
                    <img
                      className="current-track"
                      src={artistData?.picture}
                      alt="Queen"
                    />
                    <p className="current-track-title">
                      {artistData?.name} best of
                    </p>
                    <figcaption>Playlist</figcaption>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
