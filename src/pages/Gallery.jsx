import React, { useState } from "react";
import "../style/Gallery.css";

const images = [
  { src: "/Luxury suite view.webp", alt: "Luxury Suite View", caption: "Luxury Suite View" },
  { src: "/dining table.webp", alt: "Fine Dining Experience", caption: "Fine Dining" },
  { src: "/hotel lounge.webp", alt: "Outdoor Lounge", caption: "Outdoor Lounge" },
  { src: "/swimming pool.webp", alt: "Swimming Pool", caption: "Swimming Pool" },
  { src: "/lobby and reception.webp", alt: "Lobby & Reception", caption: "Lobby & Reception" },
  { src: "/smoking area.webp", alt: "Smoking area", caption: "smoking area" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="gallery-container">
      <h1>Gallery</h1>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-item" onClick={() => setSelectedImage(image.src)}>
            <img src={image.src} alt={image.alt} />
            <p className="caption">{image.caption}</p>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Selected" />
        </div>
      )}
    </div>
  );
};

export default Gallery;