import React, { Component } from 'react';

export default class InputTodo extends Component {
  state = {
    title: '',
  };

  onChange = (e) => {
    console.log(e.target.value);
    this.setState({
      title: e.target.value,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.title);
    this.props.addTodo(this.state.title);
    this.setState({
      title: '',
    });
  };

  render() {
    return (
      <form action="" onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="Add todo"
          onChange={this.onChange}
          value={this.state.title}
        />
        <button className="py-1 px-4 bg-indigo-500 text-white">Submit</button>
      </form>
    );
  }
}
