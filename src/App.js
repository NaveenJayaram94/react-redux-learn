import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from "react-redux";
import './App.css';
import * as actionCreator from "./store/actions/actions";
class App extends Component {
  render() {
    return (
      <div className="App">
        <div>Age : <span>{this.props.age}</span></div>
        <button onClick={this.props.onAgeUp}>Age Up</button>
        <button onClick={this.props.onAgeDown}>Age Down</button>
        {
          this.props.loading && <img src={logo} className="app-logo" />
        }
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    age: state.age,
    loading: state.loading
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onAgeUp: () => dispatch(actionCreator.ageUp(1)),
    onAgeDown: () => dispatch(actionCreator.ageDown(1)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
