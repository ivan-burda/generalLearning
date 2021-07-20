import {BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Child = ({match}) => (
  <div>
    <h3>ID: {match.params.id}</h3>
  </div>
)



function App() {
  return (
    <Router>
      <div>
        <h2>Accounts</h2>
        <ul>
          <li><Link to='/netlifx'>Netflix</Link></li>
          <li><Link to='/zillow-group'>Zillow Group</Link></li>
          <li><Link to='/yahoo'>Yahoo</Link></li>
          <li><Link to='/modus-create'>Modus</Link></li>
        </ul>
      </div>

      <Route path='/:id' component={Child}/>
    </Router>
  );
}

export default App;
