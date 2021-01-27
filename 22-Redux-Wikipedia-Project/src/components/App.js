import React, { Component } from "react";
import Form from "./Form";
import { connect } from "react-redux";
import { getWikies } from "../store/actions/fetchWiki";

class App extends Component {
  handleSubmit = (searchValue) => {
    this.props.getWikies(searchValue);
  };

  render() {
    const { data } = this.props;
    console.log(data[3]);
    return (
      <div className="container">
        <h1>Wikipedia Search</h1>
        <Form handleSubmit={this.handleSubmit} />
        <ul>
          {data[1].map((entry, index) => {
            console.log(entry);
            return (
              <li key={index}>
                <a href={data[3][index]} target="_blank" rel="noreferrer">
                  {entry}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const MapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
    data: state,
  };
};
const MapDispatchToProps = { getWikies };

export default connect(MapStateToProps, MapDispatchToProps)(App);
