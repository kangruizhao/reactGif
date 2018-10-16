import React, { Component } from 'react';
import '../../node_modules/materialize-css/dist/css/materialize.min.css';
import {clean,fetchFavor} from '../actions';
import GifList from './giflist';
import { connect } from 'react-redux';
class Favorites extends Component{
  componentDidMount() {
      this.props.fetchFavor();

    }


    render(){
      var outerstyle={
          marginLeft:"0"
      }
      const loader = <div className="loader">Loading ...</div>;
      var items=[];


      return(
         <GifList/>
      );
    }
}
function mapStateToProps({ gifs }) {
  return { gifs };
}

export default connect(mapStateToProps, { fetchFavor,clean})(Favorites);
