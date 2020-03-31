import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Navbar} from 'react-router-dom';
import Main from './containers/Main'


const App = () => {
  
  return (
    <div>
    <div className="application">
      <div>
        <nav>
          
            
              <Link to="/weather"><button>Weather</button></Link>
           
              <Link to="/activities"><button>All Activities</button></Link>
           
              <Link to="/user/Activities"><button>My Activities</button></Link>

              <Link to="/"><button>Log Out</button></Link>
          <br />
        </nav>
        </div>
      </div>

      <Main />
      </div>
 
  )
}

export default App;