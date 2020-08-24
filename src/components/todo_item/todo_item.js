import React from 'react';



function TodoItem({ todo }) {
    return (
        <div>
            <h3>{todo.title}</h3>
            <h5>{todo.description}</h5>
            <button>Delete</button>
            <button>Edit</button>
        </div>
    );
}

export default TodoItem;