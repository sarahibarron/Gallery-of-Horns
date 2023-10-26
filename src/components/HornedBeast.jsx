import { useState } from "react";

export default function HornedBeast({
  title,
  imageUrl,
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
        src={imageUrl}
        alt={title}
        onClick={() => handleShowModal({ title, imageUrl, description })}
      />
      <p onClick={handleClick}>{likes} ♥</p>
    </div>
  );
}
