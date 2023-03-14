import React from 'react';

const CompTiIn = (props) => {
  const { name, setName, age, setAge, status, setStatus } = props;

  return (
    <div className="title-input">
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="age">Age:</label>
      <input
        type="number"
        id="age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <label htmlFor="status">Status:</label>
      <select
        id="status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
    </div>
  );
};

export default CompTiIn;