import React from "react";
import { List, NoList } from "./List";
import { connect } from "react-redux";
import { addTodo, editTodo, deleteTodo } from "../action/updateList";

// React:
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputField: "",
    };
  }
  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({ inputField: e.target.value });
  };
  onSubmit = () => {
    if (this.state.inputField.length<1) {
      alert("Fill in the blanks");
    } else {
      this.props.onAdd(this.state.inputField);
    }
    this.setState({ inputField: " " });
  };

  render() {
    return (
      <div id="toDoApp">
        <label id="toDoTitle" htmlFor="basic-input">
          <h2 className="text-monospace">Add new things To Do:</h2>
        </label>
        <div id="toDoAdd" className="input-group">
          <input
            id="basic-input"
            className="form-control"
            type="text"
            placeholder="Thing to do"
            onChange={this.handleChange}
            value={this.state.inputField}
          />
          <div className="input-group-append">
            <button
              onClick={this.onSubmit}
              className="btn btn-outline-primary mx-2 "
            >
              Add
            </button>
          </div>
        </div>
        {this.props.contain.length !== 0 ? (
          <List
            onDelete={this.props.onDelete}
            onEdit={this.props.onEdit}
            contain={this.props.contain}
          />
        ) : (
          <NoList />
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  contain: state,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: (content) => dispatch(addTodo(content)),
    onEdit: (index, content) => dispatch(editTodo(index, content)),
    onDelete: (index) => dispatch(deleteTodo(index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
