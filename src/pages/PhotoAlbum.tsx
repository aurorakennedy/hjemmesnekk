import Footer from "../components/Footer";
import List from "../components/List";
import Navbar from "../components/Navbar";
import { photoAlbumData, shuffleArray } from "../data/photoAlbumData";
import "./PhotoAlbum.css";

const PhotoAlbum = () => {
  const shuffledPhotos = shuffleArray(photoAlbumData);

  return (
    <div className="photo-album">
      <Navbar />
      <header className="photo-album-header">
        <h1 className="photo-album-title">BILDEVEGG</h1>
      </header>
      <div className="photo-album-content">
        <List items={shuffledPhotos} imgClassName="photo-album-img" />
      </div>
      <Footer />
    </div>
  );
};

export default PhotoAlbum;
