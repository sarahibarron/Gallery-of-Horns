import HornedBeast from "./HornedBeast";

export default function Gallery({ data, handleShowModal }) {
  return (
    <div className="gallery">
      {data.map((beast) => {
        return (
          <HornedBeast
            key={beast._id}
            title={beast.title}
            imageUrl={beast.image_url}
            description={beast.description}
            handleShowModal={handleShowModal}
          />
        );
      })}
    </div>
  );
}
