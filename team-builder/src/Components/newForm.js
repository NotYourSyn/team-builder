import React, {useState} from 'react';
import Form from './Form';

const NewForm = props => {
    const [form, setForm] = useState(
        {
            Name: '',
            Email: '',
            Role: '',
        }
    );
    const changeHandeler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };


const submitForm = (e) => {
    e.preventDefault();
    props.addNewForm(form);
    setForm({Name:'',Email:'',Role:''})
}

return(
        <form onSubmit={submitForm}>
            <label htmlFor='name'>Name</label>
            <input type='text' name='name' value={form.name} onChange={changeHandeler} />

            <label htmlFor='email'>Email</label>
            <input type='text' name='email' value={form.email} onChange={changeHandeler} />

            <label htmlFor='role'>Role</label>
            <input type='text' name='role' value={form.role} onChange={changeHandeler} />

            <button type='submit'>Add New Team Member</button>
        </form>
     );

};

export default NewForm;