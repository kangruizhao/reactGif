import React, { Component } from 'react';
import '../../node_modules/materialize-css/dist/css/materialize.min.css';
import {fetchAGif,removeLocal,addLocal,searchAction} from '../actions';
import { connect} from 'react-redux';
import GifContainer from './gifcontainer'
class Detail extends Component{
componentDidMount(){

   this.props.fetchAGif(this.props.match.params.id);
}
componentWillReceiveProps(nextProps) {
if (nextProps.location !== this.props.location) {
  // navigated!
  location.reload();
}
}
check(id){
  var fl = JSON.parse(localStorage.getItem('flist'));
  if(fl===null){
      return true;
    }
  for(var i=0;i<fl.length;i++)
        {
          if(fl[i].id===id)
            {
              return false;
            }
        }
        return true;
}
  render(){
    var style={
      marginLeft:"20px"
    }
    var text={
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis'
    }
    var items=[];
    if(this.props.select===null) return (<div>loading..</div>);
    this.props.searchAction(this.props.select.title,7);
    if (this.props.gifs!==null){
      this.props.gifs.map(gif=>{
        items.push(<GifContainer gif={gif}/>)
      })}

    var gif=this.props.select;
    return(
      <div className="container-fluid">
      <div className="row">
          <div className="col s3">
           {gif.user!==null&&gif.user!==undefined&&
             <div className="userprofit">
              <div className="col s2">
              <img src={gif.user.avatar_url===null?"#":gif.user.avatar_url}
                height="50px"
              width="50px"/>
              </div>
              <div className="col s1" style={style}>
                <a href={gif.user.profile_url}>{gif.user.display_name}</a>
              </div>
             </div>
           }
           <br/>
           <br/>
           <br/>
           <hr/>

            <p style={text}> SOURCE:  <a href={gif.source}>{gif.source}</a> </p>
             <p> Rating:  <strong>{gif.rating}</strong></p>
             <p> Post At:  <strong>{gif.import_datetime}</strong></p>
             <br/>
             <br/>
             <hr/>
             <br/>
             {this.check(gif.id)&&
          <a className="waves-effect waves-light btn"
         onClick={() => this.props.addLocal(gif)}
         >Favorites</a> }
         {!this.check(gif.id)&&
      <a className="waves-effect waves-light btn"
     onClick={() => this.props.removeLocal(gif.id)}
     >UnFavorites</a> }
          </div>
         <div className="col s6">
         <h5>{gif.title} </h5>
         <img src={gif.images.original.webp}
           height={gif.images.original.height}
         width="80%"/>
         </div>
         <div className="col s3" >
         <h5> Related GIFs:</h5>
         {items}
         </div>
      </div>
      </div>
    )
  }
}
function mapStateToProps({ select,gifs }) {
  return { select,gifs };
}

export default connect(mapStateToProps, { fetchAGif,removeLocal,addLocal,searchAction})(Detail);
