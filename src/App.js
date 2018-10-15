import React, { Component } from 'react';
import Header from './components/header';
import Trend from './components/trend';
import Favorites from './components/favorites';
import Search from './components/search';
import Detail from './components/detail';
import UpLoad from './components/uploadform';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
class App extends Component {
  render() {
    var style={
        backgroundColor: "black"
    }
    return (
      <BrowserRouter>
        <div >
        <Header/>
          <br/>
          <br/>
            <div>

            <Route exact path="/" component={Trend} />
           <Route exact path="/favorites" component={Favorites} />
           <Route exact path="/search" component={Search} />
           <Route exact path="/upload" component={UpLoad} />
           <Route exact path="/gif/:id" component={Detail} />
      
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
