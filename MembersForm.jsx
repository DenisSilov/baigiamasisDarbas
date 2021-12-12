import React, { useState } from 'react';
import useFetch from '../hooks/useFetch';

const MembersForm = () => {
  // -- state

  const [name_surname, setName_surname] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(0);
  const [memberData, setMemberData] = useState([]);
  const [method, setMethod] = useState('');

  const [loading, data, error] = useFetch("members",method, null, memberData);

  // Functios
  function submitHandler(e) {
    e.preventDefault();
    const member = {
      name_surname: name_surname,
      email: email,
      age: +age,
    };
    setMethod('POST');
    setMemberData(member);
  }

  return loading ? (
    <p>Loading...</p>
  ) : error ? (
    <p>{error}</p>
  ) : (
    <>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor='name_surname'>Name and Surname</label>
          <br />
          <input
            type='text'
            value={name_surname}
            onChange={(e) => setName_surname(e.target.value)}
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
            type='age'
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <div>
          <input type='submit' value='Register' />
        </div>
      </form>
    </>
  );
};

export default MembersForm;
