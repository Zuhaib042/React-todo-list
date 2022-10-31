import React, { Component } from 'react';
import Header from './Header';
import TodoList from './TodoList';
import InputTodo from './InputTodo';
import { v4 as uuidv4 } from 'uuid';

export default class TodoContainer extends Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: 'Setup development environment',
        completed: false,
      },
      {
        id: uuidv4(),
        title: 'Develop website and add content',
        completed: false,
      },
      {
        id: uuidv4(),
        title: 'Deploy to live server',
        completed: false,
      },
    ],
  };

  handleChange = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };

  handleDelete = (id) => {
    // console.log('Clicked', id);
    this.setState({
      todos: [
        ...this.state.todos.filter((todo) => {
          return todo.id !== id;
        }),
      ],
    });
  };

  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  render() {
    return (
      <>
        <Header />
        <InputTodo addTodo={this.addTodo} />
        {/* <ul>
          {this.state.todos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul> */}
        <TodoList
          data={this.state.todos}
          handleChangeProps={this.handleChange}
          handleDelete={this.handleDelete}
        />
      </>
    );
  }
}
