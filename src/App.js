import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Search from "./components/Search";
import Artist from "./components/Artist";
import Album from "./components/Album";
import "./App.css";
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
