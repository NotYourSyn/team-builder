import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Form from './Components/Form';
import NewForm from './Components/NewForm';
import logo from './logo.svg';
import './App.css';

function App() {

  const [teamMember, setTeamMember] = useState([
    {
      id: 0,
      Name: 'Chris Reisner',
      Email: 'chrisreisner@live.com',
      Role: 'Student'
    },
    {
      id: 1,
      Name: 'Brandon',
      Email: 'brandon@temleader.com',
      Role: 'Team Lead'
    },
    {
      id: 2,
      Name: 'Kieran',
      Email: 'kieran@instructor.com',
      Role: 'Instrucor'
    }
  ]);

  const addTeamMember = (formData) => {
    const newTeamMember = {
      Name: formData.name,
      Email: formData.email,
      role: formData.role
    }
    setTeamMember([...teamMember, newTeamMember]);
  }

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h1>New Team Members</h1>
      <NewForm addTeamMember={addTeamMember}/>
      <Form teamMember={teamMember}/>
    </div>
  );
}

export default App;
