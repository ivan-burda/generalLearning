import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

/*
  Instructions:
    You're given an array of `postIds` and a `fetchPost` function.
    When you invoke `fetchPost`, you'll need to pass it an `id` from
    the `postIds` array. `fetchPost` returns a promise that will resolve
    with a post shaped like this

    {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }

    The UI should show `Loading` if the request is still being made,
    an error message if there was an error, or the post title, body,
    and a button to fetch the next post on a successful request.
*/

const postIds = [1, 2, 3, 4, 5, 6, 7, 8]

function fetchPost(id) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((res) => res.json())
}

function App() {
  const [post, setPost] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [currentPostId, setCurrentPostId] = React.useState(postIds[0]);
  const [error, setError] = React.useState(null);


  React.useEffect(() => {
    setLoading(true);
    fetchPost(currentPostId)
      .then((data) => {
        setPost(data);
        setError(null);
        setLoading(false);
      })
      .catch((error)=>{
        console.warn(error.message);
        setError('Error fetching data. Try again.');
        setLoading(false);
        });
  }, [currentPostId]);

  const changePostHandler = (direction) => {
    if (direction === "prev") {
      setCurrentPostId(postIds[postIds.indexOf(currentPostId)] - 1);
    } else if (direction === "next") {
      setCurrentPostId(postIds[postIds.indexOf(currentPostId)] + 1)
    }
  }

  if (loading === true) {
    return <p className="Loading">Loading...</p>;
  }

  if (error) {
    return (
      <React.Fragment>
        <p>{error}</p>
        <button
          disabled={currentPostId === postIds[postIds.length - 1]}
          onClick={() => changePostHandler("next")}
        >Next post</button>
      </React.Fragment>
    )
  }

  return (
    <div className="App">
      {post!==""? 
        <div className="Post">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <div>
            <button
              onClick={() => changePostHandler("prev")}
              disabled={currentPostId === postIds[0]}
            >Prev post</button>
            <button
              disabled={currentPostId === postIds[postIds.length - 1]}
              onClick={() => changePostHandler("next")}
            >Next post</button>
          </div>
        </div>
      :null}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
