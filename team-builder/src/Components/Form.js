import React from 'react';

const Form = props => {
    console.log(props);

    return (
        <div className='team-member-form'>
            <h1>Team Members</h1>
                {props.form.map(form =>(
                    <div className='form' key={form.id}>
                        <h2>{form.name}</h2>
                            <p>{form.email}</p>
                            <p>{form.role}</p>
                    </div>

                ))}
        </div>
    )
};

export default Form;