import { useContext } from "react";
import Post from "./post.jsx";
import { PostList as data } from "./post-store.jsx";
import ReactionButton from "./reaction.jsx";

const PostList = () => {
const{postList}=useContext(data)

  return (
    <>
    {postList.map((post)=><Post key={post.id} post={post} ></Post> )}
      
    </>
  );
};

export default PostList;
