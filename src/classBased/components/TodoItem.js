/* eslint-disable */
import React, { Component } from 'react';
import styles from './TodoItem.module.css';

export default class TodoItem extends Component {
  state = {
    editing: false,
  };

  handleEdit = () => {
    this.setState({
      editing: true,
    });
  };

  handleUpdateDone = (e) => {
    if (e.key === 'Enter') {
      this.setState({
        editing: false,
      });
    }
  };

  componentWillUnmount() {
    console.log('Cleaning up...');
  }

  render() {
    const { completed, id, title } = this.props.todo;
    const completedStyle = {
      fontStyle: 'italic',
      color: '#595959',
      opacity: 0.4,
      textDecoration: 'line-through',
    };

    const viewMode = {};
    const editMode = {};
    if (this.state.editing) {
      viewMode.display = 'none';
    } else {
      editMode.display = 'none';
    }
    return (
      <li className={styles.item}>
        <div onDoubleClick={this.handleEdit} style={viewMode}>
          <input
            className={styles.checkbox}
            type="checkbox"
            checked={completed}
            onChange={() => this.props.handleChangeProps(id)}
          />
          <button onClick={() => this.props.handleDelete(id)}>Delete</button>
          <span style={completed ? completedStyle : null}>{title}</span>
        </div>
        <input
          style={editMode}
          type="text"
          className={styles.textInput}
          value={title}
          onChange={(e) => this.props.setUpdate(e.target.value, id)}
          onKeyDown={this.handleUpdateDone}
        />
      </li>
    );
  }
}
