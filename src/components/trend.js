import InfiniteScroll from 'react-infinite-scroller';
import React, { Component } from 'react';
import '../../node_modules/materialize-css/dist/css/materialize.min.css';
import {fetchTrend} from '../actions';
import GifContainer from './gifcontainer';
import GifList from './giflist';
import { connect } from 'react-redux';
class Trend extends Component{
  state = {
            items: 30,
            isloading:false
        };
    componentDidMount() {

      }
 loadItems(page) {
   if(this.state.isloading) return;
   this.setState({isloading:true});
   this.props.fetchTrend(this.state.items);
   setTimeout(() => {
       this.setState({ items: this.state.items + 30, isloading: false });
   }, 1000);
 }

 render(){
   var outerstyle={
       display:"flex"
   }
   var scrollsyle={
     overflow: "auto"
   }
   const loader = <div className="loader">Loading ...</div>;


   return(
     <div>
      <h4> TRENDING GIFS</h4>
        <InfiniteScroll
           pageStart={0}
           loadMore={this.loadItems.bind(this)}
           hasMore={true}
           loader={<div className="loader" key={0}>Loading ...</div>}
           threshold={110}
       >
      <GifList/>
       </InfiniteScroll>
     </div>
   );
 }
}
function mapStateToProps({ gifs }) {
  return { gifs };
}

export default connect(mapStateToProps, { fetchTrend })(Trend);
