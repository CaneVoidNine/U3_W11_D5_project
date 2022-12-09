import "../css/welcome.css";
export default function MyCards() {
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
      {/*Loading*/}
      <div id="loading" className="d-flex justify-content-center">
        <div
          className="spinner-border"
          style={{ width: "5rem", height: "5rem" }}
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
      {/*Cards*/}
      <div className="row mt-3 scrollit">
        <div className="row" id="cardstart">
          <h1 className="col-12 mb-4">Good Morning</h1>
          <div className="col-3">
            <a href="/#">
              <div className="sidecards col-2">
                <img className="col-4" src alt="" />
                <p className="col-8 sidetext" />
              </div>
            </a>
          </div>
        </div>
        <div className="row pl-3 mt-3" id="mainrow">
          <h2 className="col-12 ml-3 mb-4">Recently Played</h2>
          <div className="col-12 pl-3 row" id="firstAlbumRow">
            <div className="albumCard">
              <img className="col-11" src alt="" />
              <div className="albumText">
                <p>Artist</p>
                <p>Song</p>
              </div>
            </div>
          </div>
          <h2 className="ml-3 mb-4 mt-5">Artists to Try</h2>
          <div className="col-md-8 col-lg-12 pl-3 row" id="secondAlbumRow">
            <div className="albumCard">
              <img className="col-11" src alt="" />
              <div className="albumText">
                <p>Artist</p>
                <p id="podcast-hook">Check out talented artists!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
