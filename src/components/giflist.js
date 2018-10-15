import InfiniteScroll from 'react-infinite-scroller';
import React, { Component } from 'react';
import '../../node_modules/materialize-css/dist/css/materialize.min.css';
import {fetchTrend} from '../actions';
import GifContainer from './gifcontainer';
import { connect } from 'react-redux';
class GifList extends Component{

  state = {
            items: 30,
            isloading:false
        };
 render(){
   var outerstyle={
       display:"flex"
   }
   var scrollsyle={
     overflow: "auto"
   }
   var items=[];
   if(this.props.gifs!==null){

   this.props.gifs.map(gif=>{
     items.push(<GifContainer gif={gif}/>)
   })}
   return(

     <div className="container-fluid" style={scrollsyle}>
       <div className="row">
       <div className="col s10 offset-s1" style={outerstyle}>
       <div className="col s3" ref="iScroll">
         {items.filter((item,index) =>index%4===0)}
       </div>
       <div className="col s3">
         {items.filter((item,index) =>index%4===1)}
       </div>
       <div className="col s3">
         {items.filter((item,index) =>index%4===2)}
       </div>
       <div className="col s3">
         {items.filter((item,index) =>index%4===3)}
       </div>
     </div>
     </div>
     </div>
   )
 }
}
function mapStateToProps({ gifs }) {
  return { gifs };
}
export default connect(mapStateToProps)(GifList);
