import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

/*
  Instructions:
    Given the array of "posts", recreate the functionality for this app. 
    By default, each post preview is cut off until the user clicks "Open". 
    Only one post can be "Open" at a time.
*/

const Post = (props) => {
  return (
    <div className={["Post", !props.active ? "active" : null].join(" ")}>
      <img src={props.image} alt="Course graphics"/>
      <p>{props.active ? `${props.text.substr(0, 100)}...` : props.text}</p>
      {props.active ? <button onClick={props.expand}>Open</button> : null}
    </div>
  )
}

function App ({ posts }) {
  const [expandedPosts, setExpandedPosts] = React.useState([0]);
  const [collapsedPosts, setCollapsedPosts] = React.useState([1,2]);
  
  const expandPostSubmit = (id) => {
    setExpandedPosts((expandedPosts) => console.log(expandedPosts));
  };

  return (
    <div>
      {posts.map((post)=>(
        <Post 
        key={post.id} 
        image={post.img}
        text={post.text}
        active={expandedPosts.includes(post.id) ? false : true}
        expand={()=> expandPostSubmit(post.id)}
        />))}
    </div>
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <App posts={[
    {
      id: 0,
      img: 'https://ui.dev/images/content/code-splitting.png',
      text: 'Code splitting has gained popularity recently for its ability to allow you to split your app into separate bundles your users can progressively load. In this post we’ll take a look at not only what code splitting is and how to do it, but also how to implement it with React Router.'
    },
    {
      id: 1,
      img: 'https://ui.dev/images/content/composition-vs-inheritance.png',
      text: 'The problem with object-oriented languages is they’ve got all this implicit environment that they carry around with them. You wanted a banana but what you got was a gorilla holding the banana and the entire jungle. - Joe Armstrong.'
    },
    {
      id: 2,
      img: 'https://ui.dev/images/content/modules.png',
      text: 'I’ve taught JavaScript for a long time to a lot of people. Consistently the most commonly under-learned aspect of the language is the module system. There’s good reason for that. Modules in JavaScript have a strange and erratic history. In this post we’ll walk through that history and you’ll learn modules of the past to better understand how JavaScript modules work today.'
    }
  ]} />,
  rootElement
);

//      {JSON.stringify(posts, null, 2)}