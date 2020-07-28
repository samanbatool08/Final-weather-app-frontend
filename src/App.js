import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Navbar} from 'react-router-dom';
import Main from './containers/Main'
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import 'react-mdl/extra/material.js';
import 'react-mdl/extra/material.css';




const App = () => {
  
  return (
    <div>
      <div>
    {/* <div className="application">
      <div>
        <nav>
          
            
              <Link to="/weather"><button>Weather</button></Link>
           
              <Link to="/activities"><button>All Activities</button></Link>
           
              <Link to="/user/Activities"><button>My Activities</button></Link>

              <Link to="/"><button>Log Out</button></Link>
          <br />
        </nav>
        </div> */}

    <Layout>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">WeatherApp</Link>}>
            <Navigation>
              <Link to="/weather">Weather</Link>
              <Link to="/activities">Activities</Link>
              <Link to="/user/Activities">Your Activities</Link>
              <Link to="/logout">Logout</Link>
            </Navigation>
        </Drawer>
    </Layout>
        












      </div>

      <Main />
      </div>
 
  )
}

export default App;