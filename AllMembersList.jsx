import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AllMembersList = () => {
  const [memberList, setMemberList] = useState([]);

  const getAllData = () => {
    axios.get('http://localhost:5000/api/members').then((response) => {
      const allMembers = response.data;
      setMemberList(allMembers);
    });
  };

  // get current year
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    getAllData();
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Email</th>
          <th>Date of birth</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {memberList.map((member) => {
          return (
            <tr key={member._id}>
              <td>{member.name}</td>
              <td>{member.surname}</td>
              <td>{member.email}</td>
              <td>{currentYear - member.age}</td>
              <td>
                <button>Update</button>
                <button>Delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default AllMembersList;
