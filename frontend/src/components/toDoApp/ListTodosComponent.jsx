import React, { Component } from 'react';
import TodoDataService from '../../api/todo/TodoDataService.js';
class ListTodosComponent extends Component {
    constructor() {
        super()
        this.state = {
            todos: [
                { id: 1, description: "test 1", done: false, targetDate: new Date() },
                { id: 2, description: "test 2", done: false, targetDate: new Date() },
                { id: 3, description: "test 3", done: false, targetDate: new Date() }]
        }
    }
    componentDidMount(){

        TodoDataService.todos("sudeep").then(response => {
            this.setState({todos:response.data})
        })

    }


    render() {
        return (
            <div>
                <h1>Todo</h1>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>

                                <td>Description</td>
                                <td>TargetDate</td>
                                <td>Is Completed</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(
                                    todo =>
                                        <tr key={todo.id}>

                                            <td>{todo.description}</td>
                                            <td>{todo.targetDate.toString()}</td>
                                            <td>{todo.done.toString()}</td>

                                        </tr>

                                )
                            }

                        </tbody>
                    </table>

                </div>            </div>
        );
    }
}

export default ListTodosComponent;