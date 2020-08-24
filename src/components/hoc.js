import React from 'react';

function withHOC(Component) {

    return class FormWrapper extends React.Component {

        constructor(props) {
            super(props);
            this.state = this.props.field.reduce(function (acc, val) {
                return { ...acc, [val.name]: '' };
            }, {});
        }

        handleChange = (e) => {
            this.setState({
                [e.target.name]: e.target.value
            });
        }

        render() {
            return (
                <Component state={this.state} field={this.props.field} change={this.handleChange} />
            );

        }
    }
}


export default withHOC;