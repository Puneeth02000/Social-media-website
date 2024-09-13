
import React, { useState } from 'react';
import ReactionButton from './reaction.jsx';


const Post4 = ({ content }) => {
  const [reactions, setReactions] = useState({
    like: false,
    love: false,
  });

  const handleReaction = (type, reacted) => {
    setReactions(prevReactions => ({
      ...prevReactions,
      [type]: reacted,
    }));
  };

  return (
    <div className="post">
      <p>{content}</p>
      <div className="reactions">
        <ReactionButton type="like" onReact={handleReaction} />
        <ReactionButton type="love" onReact={handleReaction} />
      </div>
      <div className="reaction-summary">
        <p>Likes: {reactions.like ? '1' : '0'}</p>
        <p>Loves: {reactions.love ? '1' : '0'}</p>
      </div>
    </div>
  );
};

export default Post4;
