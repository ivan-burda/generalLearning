import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

/*
  Given the "newsletters" array below, utilize it to create 
  an app that has the following URL structure

    /
    /newsletters
      /react
        /1
        /2
        /3
      /ui
        /1
        /2
        /3
*/

const newsletters = [
  {
    name: "React Newsletter",
    id: "react",
    description: "The free, weekly newsletter of the best React news, articles, projects, and more.",
    issues: [
      {
        name: "#1",
        id: "1",
        links: [
          {
            title: "Why React Hooks?",
            url: "https://ui.dev/why-react-hooks/",
          },
          {
            title: "React Render Props",
            url: "https://ui.dev/react-render-props/",
          },
          {
            title: "React Higher-order Components",
            url: "https://ui.dev/react-higher-order-components/",
          },
        ],
      },
      {
        name: "#2",
        id: "2",
        links: [
          {
            title: "Compiling vs Polyfills with Babel",
            url: "https://ui.dev/compiling-polyfills/",
          },
          {
            title: "Build your own React Router v4",
            url: "https://ui.dev/build-your-own-react-router-v4/",
          },
          {
            title: "React AHA Moments",
            url: "https://ui.dev/react-aha-moments/",
          },
        ],
      },
    ],
  },
  {
    name: "UI Newsletter",
    id: "ui",
    description: "The free, weekly newsletter of the best UI news, articles, projects, and more.",
    issues: [
      {
        name: "#1",
        id: "1",
        links: [
          {
            title: "Computed Property Names in JavaScript",
            url: "https://ui.dev/computed-property-names/",
          },
          {
            title: "Imperative vs Declarative Programming",
            url: "https://ui.dev/imperative-vs-declarative-programming/",
          },
          {
            title: "AngularJS: Factory vs Service vs Provider",
            url: "https://ui.dev/angularjs-factory-vs-service-vs-provider/",
          },
        ],
      },
      {
        name: "#2",
        id: "2",
        links: [
          {
            title: "Shorthand Property and Method Names in JavaScript",
            url: "https://ui.dev/shorthand-properties/",
          },
          {
            title: "JavaScript Inheritance vs Composition",
            url: "https://ui.dev/javascript-inheritance-vs-composition/",
          },
          {
            title: "var vs let vs const in JavaScript",
            url: "https://ui.dev/var-let-const/",
          },
        ],
      },
    ],
  },
];

function Issue({ match }) {
  const publicationItem = newsletters.find((item) => item.id === match.params.itemId);
  const issueDetails = publication.issues.find((issue) => issue.id === match.params.issueId);
  return (
    <div>
      <h3></h3>
      <p></p>
    </div>
  );
}

function Publication({ match }) {
  const publicationItem = newsletters.find((item) => item.id === match.params.itemId);

  return (
    <div>
      <h2>{publicationItem.name}</h2>
      <p>{publicationItem.description}</p>
      <ul>
        {publicationItem.issues.map((issue) => (
          <li>
            <Link to={`${match.url}/${issue.id}`}>{issue.name}</Link>
          </li>
        ))}
      </ul>
      <hr />
      <Route patch={`${match.path}/:issueId`} component={Issue} />
    </div>
  );
}

function Newsletters({ match }) {
  return (
    <div>
      <h1>Newsletters</h1>
      <ul>
        {newsletters.map((item) => (
          <li id={item.id}>
            <Link to={`${match.url}/${item.id}`}>{item.name}</Link>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
      <hr />
      <Route path={`${match.path}/:itemId`} component={Publication} />
    </div>
  );
}

function Home() {
  return <h1>HOME</h1>;
}

class App extends React.Component {
  render() {
    return (
      <Router>
        <div style={{ width: 1000, margin: "0 auto" }}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/newsletters">Newsletters</Link>
            </li>
          </ul>

          <hr />

          {/* Top-level Routes here */}
          <Route exact path="/" component={Home} />
          <Route path="/newsletters" component={Newsletters} />
        </div>
      </Router>
    );
  }
}

export default App;
