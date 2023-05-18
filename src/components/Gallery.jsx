import GalleryItem from "./GalleryItem";

export default function Gallery({ data }) {
  const galleryItem = data.map((item, index) => {
    return <GalleryItem item={item} key={index} />;
  });

  return <div>{galleryItem}</div>;
}
