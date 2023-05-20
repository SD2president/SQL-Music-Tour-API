import GalleryItem from "./GalleryItem";
import { DataContext } from "../context/DataContext";
import { useContext } from "react";

export default function Gallery() {
  const data = useContext(DataContext);
  const galleryItem = data.map((item, index) => {
    return <GalleryItem item={item} key={index} />;
  });

  return <div>{galleryItem}</div>;
}
