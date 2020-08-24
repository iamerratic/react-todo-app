import React from 'react';

import TodoItem from '../todo_item/todo_item';

class ShowTodo extends React.Component {
    state = {
        todos: []
    };

    getTodo() {
        return {
            id: 1,
            title: 'Meeting',
            description: 'Hey'
        };
    }

    handleClick = () => {
        this.setState({
            todos: [...this.state.todos, this.getTodo()]
        });
    }

    render() {
        var content;

        if (this.state.todos.length === 0) {
            content = (
                <div>
                    No todos To display
                    <button onClick={this.handleClick}>Add</button>
                </div>
            );
        }
        else {
            content = this.state.todos.map(todo => <TodoItem key={todo.id} todo={todo} />);
        }

        return content;
    }
}


export default ShowTodo;