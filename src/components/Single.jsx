const SongCard = ({ song }) => {
  return (
    <div className="col-3">
      <a href="/album">
        <div className="sidecards col-2">
          <img className="col-4" src={song?.album.cover_xl} alt={song?.title} />
          <p className="col-8 sidetext">
            {song?.artist.name} <br />
            {song?.title}
          </p>
        </div>
      </a>
    </div>
  );
};
export default SongCard;
