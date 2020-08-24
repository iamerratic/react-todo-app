import React from 'react';

function withHOC(Component) {



    return class FormWrapper extends React.Component {

        constructor(props) {
            super(props);
            this.state = this.props.field.reduce(function (acc, val) {
                return { ...acc, [val.name]: '' };
            }, {});
        }

        handleSubmit = (e) => {
            e.preventDefault();
            console.log(this.state);
        }

        handleChange = (e) => {
            this.setState({
                [e.target.name]: e.target.value
            });
        }

        render() {

            var { field } = this.props;

            return (
                <form onSubmit={this.handleSubmit}>
                    {field.map(input => {
                        return <input onChange={this.handleChange} key={input.name} type={input.type} name={input.name} />
                    })}
                    <button type="submit">Submit</button>
                </form>
            );

        }
    }
}


export default withHOC;