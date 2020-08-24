import React from 'react';


import withHOC from './hoc';

function SignIn({ field, change, state }) {

    function handleSubmit(event, state) {
        event.preventDefault();
        console.log(state);
    }

    return (
        <form onSubmit={function (event) {
            handleSubmit(event, state);
        }}>
            {field.map(input => {
                return <input onChange={change} key={input.name} type={input.type} name={input.name} />
            })}
            <button type="submit">Submit</button>
        </form>
    );
}

export default withHOC(SignIn);