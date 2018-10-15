import React, { Component } from 'react';
import '../../node_modules/materialize-css/dist/css/materialize.min.css';
import { connect } from 'react-redux';
import {addLocal,removeLocal} from '../actions';
import {Modal} from 'react-materialize';
import { Link ,withRouter} from 'react-router-dom';
class GifContainer extends Component {
  //if(gif===undefined) return(<div className="loader">Loading ...</div>)

  componentWillReceiveProps(nextProps) {

}

  state={
    display:'none'
  }
  pageClick=(e)=>{
     if(this.node.contains(e.target)){
       this.setState({display:'block'})
     }
     else this.setState({display:'none'})
}
  handlec(gif){
      console.log(gif);
      this.props.addLocal(gif)
  }
render(){
  var Modalstyle={/* Hidden by default */ /* Stay in place */
    zIndex: '1', /* Sit on top */
    left: '0',
    top: '0',
    width: '100%', /* Full width */
    height: '100%', /* Full height */
     /* Enable scroll if needed */
  }
  var gifStyle={
    borderRadius: '10px',
    backgroundColor:"green"
  }
  var style={
     marginTop:'20px',
  }
  const gif=this.props.gif;
  var idx=window.location.href.lastIndexOf("/");
  var key=window.location.href.substring(idx+1);

  return(
    <div ref={node=>this.node=node} >
      <div className="s" style={style}>
        <Link to={`/gif/${gif.id}`}>
        <img src={gif.images.fixed_width.url}
          height={gif.images.fixed_width.height}
          style={gifStyle}
        width="100%"/>
    </Link>
      </div>
      </div>

  )
}
}
export default connect(null, { addLocal,removeLocal })(GifContainer);
