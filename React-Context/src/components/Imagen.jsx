import React, { useState } from "react";
import { useMyContext } from "../context/PhotosContext";
import IconHeart from "./IconHeart";

const ImageCard = ({ photo }) => {
  const { photosfavoritas, setPhotosfavoritas } = useMyContext();
  const [isFavorite, setIsFavorite] = useState(false);

  const handleLike = () => {
    // Verifica si la imagen ya está marcada como favorita
    const alreadyFavorited = photosfavoritas.some(
      (favorite) => favorite.id === photo.id
    );

    // Si ya está marcada, la eliminamos de las favoritas
    if (alreadyFavorited) {
      setPhotosfavoritas(
        photosfavoritas.filter((favorite) => favorite.id !== photo.id)
      );
    } else {
      // Si no está marcada, la añadimos a las favoritas
      setPhotosfavoritas([...photosfavoritas, photo]);
    }

    // Invertimos el estado de favorito
    setIsFavorite(!alreadyFavorited);
  };

  return (
    <div className="image-card">
      <img src={photo.src.small} alt={photo.alt} />
      <div className="photo-details">
        <h3>{photo.alt}</h3>
        <p>Fotógrafo: {photo.photographer}</p>
        <button onClick={handleLike}>
          {isFavorite ? <IconHeart filled="red" /> : <IconHeart filled="" />}
        </button>
      </div>
    </div>
  );
};

export default ImageCard;
