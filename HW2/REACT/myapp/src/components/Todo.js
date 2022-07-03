import React, { Component } from 'react';
import '../App.css';
class Todo extends Component {

    render() {
        return (
            <React.Fragment >
                <td style={{ width: 10 }} className="text-center">
                    {this.props.index}
                </td>
              
                <td>
                    {
                        this.renderTodo()
                    }
                </td>
           
           
            </React.Fragment>
        );
    }

    renderTodo(){
        if(this.props.todo.isDone)
        return <s>{this.props.todo.value}</s>;
        else
        return this.props.todo.value;
    }

}

export default Todo;