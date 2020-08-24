import React from 'react';


class TodoForm extends React.Component {
    state = {
        title: '',
        description: ''
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input name="title" onChange={this.handleChange} type="text" />
                    <input name="description" onChange={this.handleChange} type="text" />
                    <button type="submit">Add</button>
                </form>
            </div>
        );
    }
}


export default TodoForm;