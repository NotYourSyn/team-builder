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
            <label htmlFor='Name'>Name</label>
            <input type='text' name='name' value={form.name} onChange={changeHandeler} />

            <label htmlFor='Email'>Email</label>
            <input type='text' name='email' value={form.email} onChange={changeHandeler} />

            <label htmlFor='Role'>Role</label>
            <select
             name='Role' value={form.role} onChange={changeHandeler}>
               <option value=''>Select from Drop Menu</option>
               <option value="Student">Student</option>
               <option value="Team Lead">Team Lead</option>
               <option value="Instructor">Instructor</option>
               <option value="Tutor">Tutor</option>
            </select>


            <button type='submit'>Add New Team Member</button>
        </form>
     );

};

export default NewForm;