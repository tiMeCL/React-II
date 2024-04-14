import { useMyContext } from "../context/PhotosContext";
import IconHeart from "../components/IconHeart";

const Favorites = () => {
  const {
    photosfavoritas,
    setPhotosfavoritas,
    isFavorite
  } = useMyContext();

  const removephoto = (id) => {
    const imageneliminada = photosfavoritas.find((photo) => photo.id === id);

    const imagenesactualizada = photosfavoritas.filter(
      (photo) => photo != imageneliminada
    );

    setPhotosfavoritas(imagenesactualizada);
  };

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 gallery grid-columns-4">
        {photosfavoritas.map((photo) => (
          <div key={photo.id} className="photo-card">
            <img src={photo.src.small} alt={photo.alt} />
            <div className="photo-details">
              <h3>{photo.alt}</h3>
              <p>Fotógrafo: {photo.photographer}</p>
              <button onClick={() => removephoto(photo.id)}>
                {" "}
                {isFavorite ? (
                  <IconHeart filled="red" />
                ) : (
                  <IconHeart filled="" />
                )}{" "}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Favorites;
