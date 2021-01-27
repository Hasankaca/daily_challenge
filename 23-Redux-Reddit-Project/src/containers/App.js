import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Picker from "../components/Picker";
import Posts from "../components/Posts";
import { fetchPosts, clearList } from "../actions";

class App extends Component {
  state = {
    selectedSubreddit: "Please Select Options",
  };

  handleChange = (subreddit) => {
    this.props.fetchPosts(subreddit);
    this.setState({ selectedSubreddit: subreddit });
  };

  handleRefresh = () => {
    this.props.fetchPosts(this.state.selectedSubreddit);
    console.log(this.state.selectedSubreddit);
  };

  render() {
    return (
      <div>
        <Picker
          value={this.state.selectedSubreddit}
          onChange={this.handleChange}
          options={[
            "Please Select Options",
            "reactjs",
            "frontend",
            "javascript",
            "reduxjs",
            "backend",
            "nodejs",
            "mongodb",
            "redux",
            "undefined",
          ]}
          handleRefresh={this.handleRefresh}
        />

        <p>
          {this.props.lastUpdated && (
            <span>
              {"Last updated at => "}
              {new Date(this.props.lastUpdated).toLocaleTimeString()}
            </span>
          )}
        </p>
        {this.props.posts && <Posts posts={this.props.posts} />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    posts: state.redditReducer.posts,
    lastUpdated: state.redditReducer.lastUpdated,
  };
};

const mapDispatchToProps = { fetchPosts, clearList };

export default connect(mapStateToProps, mapDispatchToProps)(App);
