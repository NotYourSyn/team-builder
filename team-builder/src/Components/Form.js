import React from 'react';

const Form = props => {
    console.log(props);

    return (
        <div className='team-member-list'>
            <h1>Team Members</h1>
                {props.teamMember.map(teamMember =>(
                    <div className='form' key={teamMember.id}>
                        <h2>{teamMember.name}</h2>
                            <p>{teamMember.email}</p>
                            <p>{teamMember.role}</p>
                    </div>

                ))}
        </div>
    );
};

export default Form;