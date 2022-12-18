import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "../css/album.css";
export default function MyAlbum() {
  const params = useParams();
  const albumID = params.albumId;
  const [albumData, setAlbumData] = useState();
  const [tracklist, setTracklist] = useState();
  useEffect(() => {
    gettingAlbum();
  }, []);
  let gettingAlbum = async () => {
    const response = await fetch(
      `https://striveschool-api.herokuapp.com/api/deezer/album/${albumID}`
    );
    const album = await response.json();
    console.log(album);
    setAlbumData(album);
    console.log(albumData);
  };
  return (
    <div>
      {/* Content */}
      <div className="contentDiv px-2">
        <div className="row arrows justify-content-between">
          {/* Arrows */}
          <div className="col-1 d-flex justify-content-between align-items-start mt-2">
            <div className="leftArrow rounded-circle text-white d-flex justify-content-center align-items-center">
              <i className="bi bi-chevron-left fa-3x" />
            </div>
            <div className="rightArrow rounded-circle text-white d-flex justify-content-center align-items-center">
              <i className="bi bi-chevron-right fa-3x align-self-center" />
            </div>
          </div>
          {/* Account Info */}
          <div className="d-flex">
            <div className="accountInfo d-flex rounded-pill p-1 mt-2 mr-2">
              <div className="profilePhotoDiv d-flex align-item-center justify-content-center rounded-circle mr-1">
                <img
                  src="https://image.shutterstock.com/mosaic_250/2780032/1770074666/stock-photo-head-shot-of-african-self-assured-executive-manager-portrait-successful-staff-member-company-1770074666.jpg"
                  alt="Profile Foto"
                  className="profileImg"
                />
              </div>
              <div className="profileName text-white align-self-center pl-1 pr-1">
                Alexander Spomer
              </div>
              <div className="profileArrowDown text-white align-self-center pl-1 pr-1 ml-auto mr-xl-1">
                <i className="bi bi-caret-down-fill" />
              </div>
            </div>
          </div>
        </div>
        {/* Album Cover + Info */}
        <div className="row d-flex my-3">
          <div className="col-2 mt-2 d-flex align-items-end">
            <img
              src={albumData?.cover_xl}
              alt="Album Cover"
              className="albumCover"
            />
          </div>
          <div className="col-10 d-flex align-items-end mt-2 text-white">
            <div className="d-flex flex-column">
              <div className="recordType text-uppercase">Album</div>
              <h2 className="albumTitle">{albumData?.title}</h2>
              <div className="d-flex artistFullDiv">
                <div className="artistImageDiv rounded-circle d-flex align-item-center justify-content-center">
                  <img
                    src={albumData?.cover_small}
                    alt="Profile Foto"
                    className="artistImg"
                  />
                </div>
                <div className="albumInfo d-flex align-items-center ml-1">
                  <div className="artist">
                    <a
                      href={`/artist/${albumData?.artist.id}`}
                      className="links"
                    >
                      {albumData?.artist?.name}
                    </a>
                  </div>
                  <div className="separaterDot">
                    <i className="bi bi-dot" />
                  </div>
                  <div className="releaseYear">{albumData?.release_date}</div>
                  <div className="separaterDot">
                    <i className="bi bi-dot" />
                  </div>
                  <div className="quantityDuration pr-4">
                    {albumData?.duration}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Play, Heart, Dots */}
        <div className="row bgBlackTransparent">
          <div className="col-12 d-flex align-items-center my-3">
            <div
              id="change-button"
              className="playButton mr-3 rounded-circle text-white d-flex justify-content-center align-items-center"
            >
              <i
                onclick="buttonChange(), document.getElementById(`sound1`).play()"
                className="bi bi-play-fill"
              />
            </div>
            <div id="change-heart" className="heart mx-3 text-white">
              <i onclick="heartChange()" className="bi bi-heart" />
            </div>
            <div className="dots text-white mx-3">
              <i className="bi bi-three-dots" />
            </div>
          </div>
        </div>
        {/* Table */}
        <div className="row bgBlackTransparent scrollit pb-0">
          <table className="table table-borderless mx-3 mt-3 text-white">
            <thead className="theadBorderBottom">
              <tr>
                <th className="thMinWidth" scope="col">
                  #
                </th>
                <th scope="col">Title</th>
                <th scope="col" className="text-right pr-5">
                  <i className="bi bi-clock" />
                </th>
              </tr>
            </thead>
            <tbody id="trackTable" className="scrollit">
              <tr>
                <th className="thMinWidth" scope="row">
                  1
                </th>
                <td className="d-flex flex-column">
                  <div className="tableTitle">
                    {albumData?.tracks?.data[0]?.title}
                  </div>
                  <div className="tableArtist">
                    {albumData?.tracks?.data[0]?.artist?.name}
                  </div>
                </td>
                <td className="text-right pr-5">
                  {albumData?.tracks?.data[0]?.duration}
                </td>
              </tr>
              <tr>
                <th className="thMinWidth" scope="row">
                  2
                </th>
                <td className="d-flex flex-column">
                  <div className="tableTitle">
                    {albumData?.tracks?.data[1]?.title}
                  </div>
                  <div className="tableArtist">
                    {albumData?.tracks?.data[1]?.artist?.name}
                  </div>
                </td>
                <td className="text-right pr-5">
                  {albumData?.tracks?.data[1]?.duration}
                </td>
              </tr>
              <tr>
                <th className="thMinWidth" scope="row">
                  3
                </th>
                <td className="d-flex flex-column">
                  <div className="tableTitle">
                    {albumData?.tracks?.data[2]?.title}
                  </div>
                  <div className="tableArtist">
                    {albumData?.tracks?.data[2]?.artist?.name}
                  </div>
                </td>
                <td className="text-right pr-5">
                  {albumData?.tracks?.data[2]?.duration}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* Music Player Bar */}
      <div className="container-fluid footer fixed-bottom musicPlayer">
        <div className="row mt-3">
          {/* Left side */}
          <div className="col-3 d-flex">
            <div className="playerSongImageDiv">
              <img
                src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/114/posts/34296/final_image/Final-image.jpg"
                alt="Song Cover"
                className="playerSongImage"
              />
            </div>
            <div className="playerSongInfo d-flex flex-column justify-content-center">
              <div className="playerSongTitle px-2">
                Another One Bites The Dust - Remastered 2011
              </div>
              <div className="playerSongArtist px-2">Queen</div>
            </div>
            <div className="playerSongIcons d-flex align-items-center">
              <div id="change-heart2" className="playerHeart px-3">
                <i onclick="heartChange3()" className="bi bi-heart" />
              </div>
              <div className="playerLaptop">
                <i className="bi bi-laptop" />
              </div>
            </div>
          </div>
          {/* Center */}
          <div className="col-6 d-flex flex-column text-white pt-2 justify-content-center">
            <div className="iconsDivPlayer d-flex justify-content-center">
              <div className="iconShuffle px-2 d-flex justify-content-center align-items-center">
                <i className="bi bi-shuffle" />
              </div>
              <div className="iconPrevious px-2 d-flex justify-content-center align-items-center">
                <i className="bi bi-skip-start-fill" />
              </div>
              <div
                id="change-button2"
                className="iconPlay mx-2 rounded-circle d-flex justify-content-center align-items-center"
              >
                <i
                  onclick="buttonChange3(), document.getElementById(`sound1`).play()"
                  className="bi bi-play-fill"
                />
              </div>
              <div className="iconNext px-2 d-flex justify-content-center align-items-center">
                <i className="bi bi-skip-end-fill" />
              </div>
              <div className="iconRepeat px-2 d-flex justify-content-center align-items-center">
                <i className="bi bi-repeat" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
