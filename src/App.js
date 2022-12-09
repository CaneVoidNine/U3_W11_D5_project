import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Search from "./components/Search";
import Artist from "./components/Artist";
import Album from "./components/Album";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/search" element={<Search />} />
        <Route path="/artist" element={<Artist />} />
        <Route path="/album" element={<Album />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
