import React, { useEffect, useState } from "react";
import MyModal from "../components/MyModal/MyModal";
import MyPostModal from "../components/MyModal/MyPostModal";
const PostsList = (props) => {
  const [filter, setFilter] = useState(props.children);

  useEffect(() => {
    //хук появляется сразу после загрузки страницы
    setFilter(props.children); //присваивает
  }, [props.children]); //за чем будем следить

  const [posts, setPosts] = useState(null);
  const [post, setPost] = useState({
    userId: "",
    id: "",
    title: "",
    body: "",
  });


  const clear = () => {
    setPost({ userId: "", id: "", title: "", body: "" });
  };

  const addPost = () => {
    const id = Math.random() * 1;
    setPost({ ...post, id: id });
    setPosts([...posts, post]);
    setPost({
      userId: "",
      id: "",
      title: "",
      body: "",
    });
  };

  const getSearch = () => {
    if (filter) {
      //если данный в fiter есть
      return filter;
    }
    return props.children;
  };
  const postSearch = getSearch();
  const onChange = (e) => {
    setFilter(
      props.children.filter((post) =>
        post.title.toLowerCase().includes(e.target.value.toLowerCase())+
        post.body.toLowerCase().includes(e.target.value.toLowerCase())

      )
    );
  };
  const [showModal, setshowModal] = useState(false);
  const [showPostModal, setshowPostModal] = useState(false);
  return (
    <>
      {props.search && (
        <div className="row search">
          <div className="input-field col s6">
          <i class="material-icons prefix">search</i>
            <textarea
              id="icon_prefix2"
              className="materialize-textarea"
              onChange={onChange}
              placeholder="Search"
            ></textarea>
          </div>
        </div>
      )}

      <MyPostModal visible={showPostModal} setVisible={setshowPostModal}>
        {
               <>
               <div className="input-field col s6">
                 <i className="material-icons prefix">account_circle</i>
                 <input
                   id="title"
                   type="text"
                   className="validate"
                   value={post.title}
                   placeholder="Enter Name"
                   onChange={onChange}
                 />
               </div>
               <div className="input-field col s6">
                 <i className="material-icons prefix">phone</i>
                 <input
                   id="body"
                   type="text"
                   value={post.body}
                   className="validate"
                   placeholder="Enter Phone"
                   onChange={onChange}
                 />
               </div>

               <div className="input-field col s6">
                 <i className="material-icons prefix">email</i>
                 <input
                   id="id"
                   type="num"
                   value={post.userId}
                   className="validate"
                   placeholder="Enter E-mail"
                   onChange={onChange}
                   />
                   </div>
                   <a className="waves-effect waves-light btn m-1"
                     onClick={() => addPost()}>Add</a>
                   <a className="waves-effect waves-light right btn m-1"
                     onClick={() => clear()}>Clear</a>
             </>
        }
      </MyPostModal>

          <MyModal visible={showModal} setVisible={setshowModal} posts = {props}>
            {
              <>
                <div className="input-field col s6">
                  <p>{props.title}</p>
                </div>
                <div className="input-field col s6">
                  <p>{props.body}</p>
                </div>
                <div className="input-field col s6">
                  <p>{props.userId}</p>
                </div>
                <div className="input-field col s6">
                  <p>{props.id}</p>
                </div>
              </>}
          </MyModal>
      {props.children &&
        filter.map((posts) => (
          <div class="row" key={posts.id}  >
            <div class="col s12 m6">
              <div class="card blue-grey darken-1">
                <div class="card-content white-text" onClick={() => {setshowModal(true)}}>
                  <h5 class="card-title">{posts.title}</h5>
                  <p>{posts.body}</p>
                </div>
                <div class="card-action">
                  <a href="#">{posts.userId}</a>
                  <a href="#">{posts.id}</a>
                  <i
                    className="material-icons"
                    onClick={() => props.deletePost(posts.id)}
                  >
                    delete
                  </i>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default PostsList;
