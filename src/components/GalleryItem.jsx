import { useState } from "react";
import { Link } from "react-router-dom";

export default function GalleryItem({ item }) {
  let [view, setView] = useState(false);

  let {
    trackName,
    collectionName,
    primaryGenreName,
    releaseDate,
    artworkUrl100,
    artistId,
    collectionId,
    trackId
  } = item;

  const simpleStyple = {
    width: "25vw",
    height: "20vh",
    border: "1px solid black",
    margin: "2px",
  };

  const detailStyle = {
    width: "80vw",
    height: "20vh",
    border: "1px solid black",
    margin: "2px",
    backgroundImage: `url(${artworkUrl100})`,
    backgroundRepeat: "no-repeat",
    color: "grey",
    backgroundSize: "cover",
  };

  const simpleView = () => {
    return (
      <div style={simpleStyple}>
        <h3>{trackName}</h3>
        <h4>{collectionName}</h4>
      </div>
    );
  };

  const detailView = () => {
    return (
      <div style={detailStyle}>

        <h3>
          <Link to={`/artist/${artistId || trackId}`}>{trackName}</Link>
        </h3>

        <h3>
          <Link to={`/album/${collectionId}`}>{collectionName}</Link>
        </h3>

        <h4>{primaryGenreName}</h4>
        <h4>{releaseDate}</h4>
      </div>
    );
  };

  return (
    <div onClick={() => setView(!view)} style={{ display: "inline-block" }}>
      {view ? detailView() : simpleView()}
    </div>
  );
}
