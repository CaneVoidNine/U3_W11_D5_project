import React from "react";
import "../css/search.css";
import { useState } from "react";
import { Col, Form } from "react-bootstrap";

import Searching from "./Searching";
export default function MySearch() {
  const [query, setQuery] = useState("");
  const [songs, setSongs] = useState([]);

  const baseEndpoint =
    "https://striveschool-api.herokuapp.com/api/deezer/search?q=";

  const handleChange = (e) => {
    setQuery(e.target.value);
    console.log(query);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        setSongs(data);
        console.log(songs);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="contentDiv px-2">
      <div className="row-fluid">
        <div className="row searchBar align-items-center">
          {/* Arrows Search Bar */}
          <div className="col-6 d-flex justify-content-between align-items-center mt-2">
            <div className="leftArrow mr-2 rounded-pill text-white d-flex justify-content-center align-items-center">
              <i className="bi bi-chevron-left fa-3x" />
            </div>
            <div className="rightArrow mr-4 rounded-circle text-white d-flex justify-content-center align-items-center">
              <i className="bi bi-chevron-right fa-3x" />
            </div>
            <div className="input-group d-flex justify-content-start">
              <div className="input-group-prepend"></div>
              <Form onSubmit={handleSubmit}>
                <Form.Control
                  type="search"
                  value={query}
                  onChange={handleChange}
                  placeholder="Search for songs"
                  style={{
                    color: "white",
                    backgroundColor: "black",
                    minWidth: "380px",
                    borderRadius: "20px",
                  }}
                />
              </Form>
              <div className="input-group-append"></div>
            </div>
          </div>
          {/* Account Info */}
          <div className="col-6 d-flex justify-content-end">
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
        <div className="row">
          <div className="col-12 mt-3 mb-3 d-flex">
            <div className="options rounded-pill px-3 py-1 text-white mr-2 d-flex align-self-center justify-content-center activeOption">
              All
            </div>
            <div className="options rounded-pill px-3 py-1 text-white mr-2 d-flex align-self-center justify-content-center">
              Songs
            </div>
            <div className="options rounded-pill px-3 py-1 text-white mr-2 d-flex align-self-center justify-content-center">
              Artists
            </div>
            <div className="options rounded-pill px-3 py-1 text-white mr-2 d-flex align-self-center justify-content-center">
              Playlists
            </div>
            <div className="options rounded-pill px-3 py-1 text-white mr-2 d-flex align-self-center justify-content-center">
              Albums
            </div>
            <div className="options rounded-pill px-3 py-1 text-white mr-2 d-flex align-self-center justify-content-center">
              Podcasts and Shows
            </div>
            <div className="options rounded-pill px-3 py-1 text-white mr-2 d-flex align-self-center justify-content-center">
              Profile
            </div>
          </div>
        </div>
      </div>
      {/* Table */}
      <div className="row scrollitSearch pb-0">
        <table className="table table-borderless mx-3 mt-3 text-white">
          <thead className="theadBorderBottom">
            <tr>
              <th className="thMinWidth" scope="col">
                #
              </th>
              <th scope="col">Tracks</th>
              <th scope="col" className="pl-5">
                Album
              </th>
              <th scope="col" className="text-right pr-5">
                <i className="bi bi-clock" />
              </th>
            </tr>
          </thead>
          <tbody id="albumTable" className="scrollit">
            <Col xs={10} className="mx-auto mb-5">
              {songs.map((obj, i) => (
                <Searching
                  key={i}
                  i={i}
                  data={obj}
                  cover={obj.album.cover_xl}
                />
              ))}
            </Col>
          </tbody>
        </table>
      </div>
    </div>
  );
}
