import { useState } from "react";

export default function HornedBeast({
  title,
  image_url,
  description,
  handleShowModal,
}) {
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }
  return (
    <div className="beast">
      <h2>{title}</h2>
      <img
        src={image_url}
        alt={title}
        onClick={() => handleShowModal({ title, image_url })}
      />
      <p>{description}</p>
      <p onClick={handleClick}>{likes} ♥</p>
    </div>
  );
}
