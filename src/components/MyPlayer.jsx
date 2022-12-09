import React from "react";
import "../css/welcome.css";
import "bootstrap/dist/css/bootstrap.min.css";
export default function MyPlayer() {
  return (
    <div>
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
              <div id="change-heart" className="playerHeart px-3">
                <i onclick="heartChange()" className="bi bi-heart" />
              </div>
              <div className="playerLaptop">
                <i className="bi bi-laptop" />
              </div>
            </div>
          </div>
          {/* center */}
          <div className="col-6 d-flex flex-column text-white pt-2 justify-content-center">
            <div className="iconsDivPlayer d-flex justify-content-center">
              <div className="iconShuffle px-2 d-flex justify-content-center align-items-center">
                <i className="bi bi-shuffle" />
              </div>
              <div className="iconPrevious px-2 d-flex justify-content-center align-items-center">
                <i className="bi bi-skip-start-fill" />
              </div>
              <div
                id="change-button"
                className="iconPlay mx-2 rounded-circle d-flex justify-content-center align-items-center"
              >
                <i
                  onclick="buttonChange(), document.getElementById(`sound1`).play()"
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
            {/* Progress Bar */}
            <div className="progressBarDiv d-flex justify-content-center align-items-center mt-1">
              <div className="timePlayed">0:12</div>
              <div className="progress mx-2" style={{ height: "2px" }}>
                <div
                  className="progress-bar bg-white"
                  role="progressbar"
                  style={{ width: "30vw" }}
                  aria-valuenow={25}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
              <div className="timeLeft">3:34</div>
            </div>
          </div>
          {/* Right side */}
          <div className="col-3 d-flex justify-content-end align-items-center">
            <div className="listIcon px-2">
              <i className="bi bi-list" />
            </div>
            <div className="computerIcon px-2">
              <i className="bi bi-pc-display" />
            </div>
            <div id="change-volume" className="volumeIcon px-2">
              <i
                onclick="changeVolume(), document.getElementById('sound1').volume=0.1"
                className="bi bi-volume-up"
              />
            </div>
            <div className="progress" style={{ height: "2px" }}>
              <div
                className="progress-bar bg-white"
                role="progressbar"
                style={{ width: "10vw" }}
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
