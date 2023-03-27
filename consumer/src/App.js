import React, { useState } from 'react';
import './App.css';

function Consumer() {
  const [data, setData] = useState([]);

  const fetchData = (event) => {
    event.preventDefault();
    fetch('/data')
      .then(response => response.json())
      .then(data => setData(data));
  };

  return (
    <div className="container">
      <form onSubmit={fetchData}>
        <button type="submit">Fetch Data</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Occupation</th>
          </tr>
        </thead>
        <tbody>
          {data.map((person, index) => (
            <tr key={index}>
              <td>{person.name}</td>
              <td>{person.age}</td>
              <td>{person.address}</td>
              <td>{person.email}</td>
              <td>{person.phone}</td>
              <td>{person.occupation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Consumer;
