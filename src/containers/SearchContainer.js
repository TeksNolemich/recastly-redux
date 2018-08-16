import React from 'react';
import Search from './../components/Search.js';
import { connect } from 'react-redux';
import handleSearchChange from '../actions/search.js';
var mapStateToProps = function(state, ownProps) {
  return {
  };
};
var mapDispatchToProps = (dispatch) => {
  return {
     handleSearchInputChange: (value) => {dispatch(handleSearchChange(value))}
    // fetchData: (url) => dispatch(itemsFetchData(url))
  }
// //TODO: define a SearchContainer component which will hook up your action
// // dispatchers with your search component props.
// //HINT: use react-redux 'connect' method to generate a container component from
// //state and dispatch mappings.
}
export default connect(mapStateToProps, mapDispatchToProps)(Search)