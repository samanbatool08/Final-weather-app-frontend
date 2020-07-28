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
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">MyPortfolio</Link>}>
            <Navigation>
              <Link to="/weather">Resume</Link>
              <Link to="/activities">About Me</Link>
              <Link to="/user/Activities">Projects</Link>
              <Link to="/logout">Contact</Link>
            </Navigation>
        </Drawer>
    </Layout>
        












      </div>

      <Main />
      </div>
 
  )
}

export default App;