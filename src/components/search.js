import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import {searchAction,clean} from '../actions';
import GifContainer from './gifcontainer';
import GifList from './giflist';
import { connect } from 'react-redux';
class Search extends Component{
  state = {value: '',
           submit:false,
           result:"",
           items:30,
           isloading:false
      };
    handleChange(event) {
  this.setState({value: event.target.value});
}
loadItems(page){
  if(this.state.isloading) return;
  this.setState({isloading:true});
  this.props.searchAction(this.state.result,this.state.items);
  setTimeout(() => {
      this.setState({ items: this.state.items + 30, isloading: false });
  }, 1000);
}

handleSubmit(event) {
  this.props.clean();
  this.props.searchAction(this.state.value,30);
  this.setState({ items:60  ,submit: true,result:this.state.value});
  event.preventDefault();
}
  render(){
    var items=[];

    
    var outerstyle={
     width:'50%',
     margin:'25px auto'
   }
      return (
        <div>
        <div style={outerstyle}>
        <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group">
        <label>Search</label>
        <input value={this.state.value} onChange={this.handleChange.bind(this)} type="text" placeholder="Search Gif" className="form-control" required/>
        </div>
        <button className="btn waves-effect waves-light" type="submit" name="action">
         Search
        </button>
      </form>
      </div>
      {this.state.submit&&
        <InfiniteScroll
           pageStart={0}
           loadMore={this.loadItems.bind(this)}
           hasMore={true}
           loader={<div className="loader" key={0}>Loading ...</div>}
           threshold={110}
       >
      <GifList/>
       </InfiniteScroll>
      }
      </div>
    )
  }
}
function mapStateToProps({ gifs }) {
  return { gifs };
}

export default connect(mapStateToProps,{searchAction,clean})(Search);
