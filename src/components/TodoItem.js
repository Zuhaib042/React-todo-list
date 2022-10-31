import React, { Component } from 'react';

export default class TodoItem extends Component {
  render() {
    return (
      <li className="my-3">
        <input
          type="checkbox"
          checked={this.props.todo.completed}
          onChange={() => this.props.handleChangeProps(this.props.todo.id)}
        />
        {this.props.todo.title}
        <button
          className=" bg-red-500 text-white py-1 px-4"
          onClick={() => this.props.handleDelete(this.props.todo.id)}
        >
          Delete
        </button>
      </li>
    );
  }
}
