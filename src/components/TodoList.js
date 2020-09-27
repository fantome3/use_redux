import React from 'react';
import { connect } from 'react-redux';
import { VisibilityFilters, toggleTodo, deleteTodo } from '../store/actions';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul className="list-group">
      { todos.map( (t, i) => (
        <TodoItem
          key={ t.name }
          todo={ t }
          deleteTodo={ () => deleteTodo(i) }
          toggleTodo={ () => toggleTodo(i) }
        />
      ))}
    </ul>
  )
}

export default connect(state => {
  let filter = state.filter;
  let todos;

  switch (filter) {
    case VisibilityFilters.SHOW_ACTIVE:{
      todos = state.todos.filter( t => !t.done);
      break;
    }

    case VisibilityFilters.SHOW_DONE: {
      todos = state.todos.filter( t => t.done);
      break;
    }
  
    default:{
      todos = state.todos;
      break;
    }
  }
  return {todos};
}, {toggleTodo, deleteTodo})(TodoList);