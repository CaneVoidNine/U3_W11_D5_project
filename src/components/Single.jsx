const SongCard = ({ song }) => {
  return (
    <div className="sidecards col-2">
      <img className="col-4" src={song.album.cover} alt="" />
      <p className="col-8 sidetext">{song.title}</p>
    </div>
  );
};
export default SongCard;
