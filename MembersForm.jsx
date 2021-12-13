import React, { useState } from 'react';
import axios from 'axios';
import AllMembersList from './AllMembersList';

const MembersForm = () => {
  // -- state
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [email, setEmail] = useState("")
  const [age, setAge] = useState("")
  const [showMessage, setShowMessage] = useState("")
  const [data, setData] = useState("")
  
  
// Functios
  const submitHandler = (e) => {
    e.preventDefault()
    axios
      .post("http://localhost:5000/api/members", {
        name: name,
        surname: surname,
        email: email,
        age: age,
      })
      .then(
        (response) => {
          console.log(response.data)
        },
        (error) => {
          console.log(error)
        }
      )
      setName("")
    setSurname("")
    setEmail("")
    setAge("")
    setShowMessage(true)
    setData("")
  }

  return  (
<div>
      <form onSubmit={submitHandler} >
        <div>
          <label htmlFor='name'>Name</label>
          <br />
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor='surname'>Surname</label>
          <br />
          <input
            type='text'
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor='email'>Email</label>
          <br />
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor='age'>Age</label>
          <br />
          <input
            type='number'
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <div>
          <input type='submit' value='Register' />
        </div>
      </form>
      <div>
     {showMessage &&  <p>{data.message}</p>}

      </div>
<br />
      <AllMembersList />
      </div>
  );
  
};


export default MembersForm;
