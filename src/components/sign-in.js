import React from 'react';

import FormRenderProps from './render';

function SignIn({ field }) {

    function handleSubmit(event, state) {
        event.preventDefault();
        console.log(state);
    }

    return (
        <FormRenderProps field={field} render={function (state, change) {
            return <form onSubmit={function (event) {
                handleSubmit(event, state);
            }}>
                {field.map(input => {
                    return <input onChange={change} key={input.name} type={input.type} name={input.name} />
                })}
                <button type="submit">Submit</button>
            </form>
        }} />
    );
}

export default SignIn;