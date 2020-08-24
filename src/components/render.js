import { Component } from 'react';


class FormRenderProps extends Component {

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
        return this.props.render(this.state, this.handleChange);
    }
}


export default FormRenderProps;