import React, { useState } from "react";

const ReactionButton = () => {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(!liked);
  };

  return (
    <button
      className={`reaction-button ${liked ? "liked" : ""}`}
      onClick={handleClick}
    >
      {liked ? "❤️ Liked" : "🤍 Like"}
    </button>
  );
};

export default ReactionButton;
