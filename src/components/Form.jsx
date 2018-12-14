import React, { PureComponent } from "react";
import { func } from "prop-types";

const initialValue = { title: "", url: "", tags: "" };

class Form extends PureComponent {
  static propTypes = {
    add: func.isRequired
  };
  state = initialValue;

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onAdd = () => {
    this.props.add(this.state);
    this.reset();
  };

  reset = () => {
    this.setState(initialValue);
  };

  render() {
    return (
      <div>
        <span>Title: </span>
        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.onChange}
        />
        <span>URL: </span>
        <input
          type="text"
          name="url"
          value={this.state.url}
          onChange={this.onChange}
        />
        <span>Tags: </span>
        <input
          type="text"
          name="tags"
          value={this.state.tags}
          onChange={this.onChange}
        />
        <button onClick={this.onAdd}>Add</button>
      </div>
    );
  }
}

export default Form;
