import HornedBeast from "./HornedBeast";

export default function Gallery({ data, handleShowModal, horns }) {
  const filteredHorns = data.filter(
    (beast) => beast.horns == horns || horns === ""
  );

  return (
    <div className="gallery">
      {filteredHorns.map((beast) => {
        return (
          <HornedBeast
            key={beast._id}
            title={beast.title}
            imageUrl={beast.imageUrl}
            description={beast.description}
            handleShowModal={handleShowModal}
          />
        );
      })}
    </div>
  );
}
