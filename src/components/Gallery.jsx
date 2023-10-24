import HornedBeast from "./HornedBeast";
import beastArr from "./data.json";

export default function Gallery() {
  return (
    <div class="gallery">
      {beastArr.map((beast) => {
        return (
          <HornedBeast
            id={beast._id}
            img={beast.image_url}
            description={beast.description}
            title={beast.title}
          />
        );
      })}
    </div>
  );
}
