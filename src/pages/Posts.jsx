import React, { useState, useRef, useEffect } from "react";
import PostsList from "../components/PostsList";
import ReactPaginate from 'react-paginate';

import axios from "axios";
import Loader from "react-loader-spinner";

const Posts = () => {
  const delay = 1000;
  const trigger = useRef(null);
  const observer = useRef(null);
  const [loadData, setLoadData] = useState(false);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState({
      userId: "",
      id: "",
      title: "",
      body: "",
    });
    const limit = 10;
    const pageCount = 100/limit;

    const fetchPosts = async () => {
      const postsFetched = await axios.get("https://jsonplaceholder.typicode.com/posts",{
        params:{
          _limit: limit,
          _page: page
      }
    });
    setPosts([...posts,...postsFetched.data]);
    setLoading(false);
  };
  useEffect(() => {

    fetchPosts();
  }, [page]);

  useEffect(() => {
    if(loadData) return;
    if(observer.current) observer.current.disconnect();
    if (page>10) return;
    const callback = function(entries, observer) {
        if(entries[0].isIntersecting){
          setPage(page+1)
        }
    };
    observer.current = new IntersectionObserver(callback);
    observer.current.observe(trigger.current);
  }, [])

  const removePost = (id) => {
    const confirm = window.confirm("Реально удалить?")
    if (confirm == true) setPosts(posts.filter((post) => post.id !== id)) //для проверки на удаление
  };



  const pageChange = (page)=>{
      console.log(page);
      setPage(page.selected+1)

    }

  const [showModal, setshowModal] = useState(false);
    const [showPostModal, setshowPostModal] = useState(false);

  return (
    <>
      <div className="App">
        <div className="container">
          <h3>Posts</h3>


          <div className="row m-1">
            <div className="col s4">
              <a className="waves-effect waves-light btn" onClick={() => setshowPostModal(true)}>
                New post
              </a>
            </div>
            <div className="col s8">

            </div>
          </div>
          {loading ? (
            <Loader
              className="loader-center"
              type="BeatLoader "
              color="#ee6e73"
              height={100}
              width={100}
              timeout={delay} //3 secs
            />
          ) : (
            <PostsList search deletePost={removePost}>
              {posts}
            </PostsList>
          )}
          <div ref={trigger} className="red accent-4">I'm a trigger</div>
      <ReactPaginate className="pagination selected"
   breakLabel="..."
   nextLabel=">"
   onPageChange={pageChange}
   pageRangeDisplayed={5}
   pageCount={10}
   onChange={pageChange}
   previousLabel="< previous"
 />
          </div>
      </div>
    </>
  );
};
export default Posts;
