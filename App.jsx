import logo from "./logo.svg";
import "./App.css";
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./sidebar.jsx";
import CreatePost from "./createpost.jsx";
import PostList from "./postlist.jsx";
import { useState } from "react";
import PostListProvider from "./post-store.jsx";
import ReactionButton from "./reaction.jsx";
import Post4 from "./reaction2.jsx";
import Comments from "./comments.jsx";
function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
  
  <PostListProvider> 
      <div className="app-container">
        <Sidebar
          selectedtab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></Sidebar>
        <div className="content">
          <Header></Header>
          {selectedTab === "Home" ? (
            <PostList></PostList>
          ) : (
            <CreatePost></CreatePost>
          )}
<ReactionButton/> <Comments/>


          <Footer />
        </div>
      </div>
      </PostListProvider>
  
  );
}
export default App;
