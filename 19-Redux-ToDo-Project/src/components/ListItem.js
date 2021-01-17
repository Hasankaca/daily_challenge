import React from "react";

class ListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      curValue: this.props.contain,
      editable: false,
    };
  }

  onChange = (e) => {
    console.log(e.target.innerHTML);
    this.setState({ curValue: e.target.innerHTML });
    
  };
  resetFunc = () => {
    this.props.onDelete(this.props.id);
  };

  updateFunc = (e) => {
    this.setState({
      curValue: this.props.contain,
      editable: !this.state.editable
    });
    console.log(this.state.curValue)
    this.props.onEdit(this.props.id, this.state.curValue);
    
  }
  

  render() {
    return (
      <div className="list-group-item list-group-item-action d-flex justify-content-between">
        
        <span
          id='item'
          onInput={this.onChange}
          value={this.state.curValue}
          contentEditable={this.state.editable}
        >
          {this.props.contain}
        </span>
        <div className="btn-group btn-group-sm" role="group">
          <button
            className="btn btn-primary mx-1"
            type="button"
            onClick={this.updateFunc}
            // disabled={!this.state.curValue}
          >
            Update
          </button>
          <button
            className="btn btn-primary mx-1"
            type="button"
            onClick={this.resetFunc}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default ListItem;
