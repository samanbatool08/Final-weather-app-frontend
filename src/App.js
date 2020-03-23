import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Main from './containers/Main'


const App = () => {
  return (
    <Router>
    <div className="application">
      <Route path="/" component= {Main} />
    </div>
  </Router>
  )
}

export default App;