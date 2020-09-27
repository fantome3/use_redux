import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../store/actions';

class AddTodo extends Component{

  constructor(props){
    super(props);
    this.newTodo = React.createRef();
  }

  submit = () => {
    this.props.addTodo({
      name: this.newTodo.current.value,
      done: false
    });
    
    this.newTodo.current.value = '';
  }

  render(){
    return (
      <div className="d-flex mb-4">
        <input 
          type="text" 
          className="form-control mr-5"
          ref={this.newTodo}
        />
        <button 
          className="btn btn-success"
          onClick={ this.submit }
        > Ajouter </button>
      </div>
    )
  }
}

export default connect(null, { addTodo })(AddTodo);