import React, { Component } from 'react';
import '../App.css';
import Todo from './Todo.js';
import AddTodo from './AddTodo';

class Todos extends Component {

  
    state = {
        addTodoValue: "",
        todos: [
         
            {
                id: 1,
                value: "Your TodoList",
            }
        ]
    }

   
    getTime() {
        let d = new Date();
        var n = d.getTime();
        return n;
    }

    
    addNewTodo = value => {
        if (value) {
            const todos = [...this.state.todos];
            todos.push(
                {
                    id: this.getTime(),
                    value: value,
                    
                }
            );
            this.setState({ addTodoValue: "", todos })
        } else {
            console.log("Please Add Todo Text");
        }
    }

    render() {
        return (
            <table className="table">
                <tbody>
                    {this.state.todos.map((todo, index) => (
                        <tr key={todo.id}>
                            <Todo index={index+1} todo={todo} fooDelete={this.handleDelete} fooDoneDone={this.handleDone} />
                        </tr>
                    ))}
                    <tr>
                        <td colSpan="4" className="text-center">
                            <AddTodo fooAddTodo={this.addNewTodo} addTodoValue={this.state.addTodoValue} />
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default Todos;