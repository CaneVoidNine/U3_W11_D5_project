import React from "react";
import "../css/welcome.css";
import "bootstrap/dist/css/bootstrap.min.css";
export default function MySideBar() {
  return (
    <div id="first" className="col-3 col-md-4 col-l-4 col-xl-2">
      <ul id="nav-1" className="nav flex-column">
        <li className="nav-item">
          <a className="nav-link my-3" href="/#">
            <img
              id="logo"
              src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"
              alt="Logo"
            />
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link d-flex align-items-center" href="/#">
            <div className="navHomeDiv d-flex justify-content-center align-items-center">
              <i className="bi bi-house-door-fill" />
            </div>
            <span className="pl-2 navSpans">Home</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link d-flex align-items-center" href="/search">
            <div className="navIconDivs d-flex justify-content-center align-items-center">
              <i className="bi bi-search" />
            </div>
            <span className="pl-2 navSpans">Search</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link d-flex align-items-center" href="/#">
            <div className="navIconDivs d-flex justify-content-center align-items-center">
              <i className="bi bi-layout-three-columns" />
            </div>
            <span className="pl-2 navSpans">Your Library</span>
          </a>
        </li>
      </ul>
      <hr />
      <ul id="nav-2" className="navActions">
        <li className="nav-item">
          <a className="nav-link d-flex align-items-center" href="/#">
            <div className="creatPlaylistDiv d-flex justify-content-center align-items-center">
              <i className="bi bi-plus" />
            </div>
            <span className="pl-2 navSpans">Create Playlist</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link d-flex align-items-center" href="/#">
            <div className="navHeartDiv d-flex justify-content-center align-items-center">
              <i className="bi bi-heart-fill" />
            </div>
            <span className="pl-2 navSpans">Liked Songs</span>
          </a>
        </li>
      </ul>
      <hr style={{ border: "solid 0.5px rgba(128, 128, 128, 0.43)" }} />
      <ul id="nav-3" className="navScroll">
        <li className="nav-item">
          <a className="nav-link active" href="/#">
            Funky Heavy Bluesy
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">
            Your Top Songs 2020
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">
            In Love With You - Erykah B...
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">
            This is Rod Stewart
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">
            FRANCHISE ft.Young Thug...
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">
            Your Top Songs 2019
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">
            Palleggio
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">
            This is Joe Bonamassa
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">
            Jun19
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">
            Jack 30th Party 2
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">
            Jack 30th Party
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">
            This is Opeth
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">
            Metal Ballads
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">
            New Playlist
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">
            Your Top Songs 2018
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">
            Jazz Classics Blue Note Editi...
          </a>
        </li>
      </ul>
      <ul id="nav-4" className="nav">
        <li className="nav-item">
          <a className="nav-link" href="/#">
            <i className="bi bi-arrow-down-circle" />
            <span>Install App</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
