import React, { useState, useEffect } from "react";
import { useMyContext } from "../context/PhotosContext";
import Imagen from "./Imagen";

const Gallery = () => {
  const { photos, setPhotos } = useMyContext();

  useEffect(() => {
    fetch("photos.json")
      .then((response) => response.json())
      .then((data) => setPhotos(data.photos))
      .catch((error) => console.error("Error al cargar datos:", error));
  }, [setPhotos]);

  return (
    <div className="gallery grid-columns-5 p-3">
      {photos.map((photo, index) => (
        <div key={photo.id} className="photo-card">
          <Imagen key={index} photo={photo} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
