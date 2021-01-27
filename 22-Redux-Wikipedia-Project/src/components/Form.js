import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
    };
    this.initialState = this.state;
  }

  handleChange = (event) => {
    this.setState({
      search: event.target.value,
    });
  };
  // handleKeyPress=(event)=> {
  //     if (event.key === "Enter") {
  //       this.submitMessage();
  //     }
  //   }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.handleSubmit(this.state.search);
    this.setState(this.initialState);
  };

  render() {
    const { search } = this.state;
    //console.log(search)
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <label htmlFor="search">Search</label>
          <input
            type="text"
            name="search"
            id="search"
            value={search}
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
