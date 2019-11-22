import React, { Component } from 'react';
import TodoDataService from '../../api/todo/TodoDataService.js';
import AuthenticationService from './AuthenticationService.js';
class ListTodosComponent extends Component {
    constructor() {
        super()
        this.state = {
            todos: [],
            message: null
        }
        this.deleteTodo = this.deleteTodo.bind(this);
        this.getAllTodos = this.getAllTodos.bind(this);
    }
    componentDidMount() {
        this.getAllTodos();


    }
    getAllTodos() {
        let loggedinUser = AuthenticationService.getLoggedinUser();

        TodoDataService.todos(loggedinUser).then(response => {
            this.setState({ todos: response.data })
        })


    }
    deleteTodo(id) {
        let loggedinUser = AuthenticationService.getLoggedinUser();
        TodoDataService.deleteTodo(loggedinUser, id).then(response => {
            this.setState({ message: "To do deleted!" })
            this.getAllTodos()

        })

    }


    render() {
        return (
            <div>
                <h1>Todo</h1>
                <div className="container">
                    {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                    <table className="table">
                        <thead>
                            <tr>

                                <th>Description</th>
                                <th>TargetDate</th>
                                <th>Is Completed</th>
                                <th>Delete</th>
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
                                            <td><button className="btn btn-danger" onClick={() => this.deleteTodo(todo.id)}>Delete</button></td>
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