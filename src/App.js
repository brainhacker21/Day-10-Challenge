import React, { useState } from 'react';
import CompTiIn from './Component/CompTiIn';
import CompTable from './Component/CompTable';
import CompButton from './Component/CompButton';
import './App.css';

function App() {
const [name, setName] = useState('');
const [age, setAge] = useState('');
const [status, setStatus] = useState('active');
const [data, setData] = useState([]);
const [selectedIndex, setSelectedIndex] = useState(null);

const handleSubmit = (e) => {
e.preventDefault();
if (selectedIndex === null) {
setData([...data, { name: name, age: age, status: status }]);
} else {
const newData = [...data];
newData[selectedIndex] = { name: name, age: age, status: status };
setData(newData);
setSelectedIndex(null);
}
setName('');
setAge('');
setStatus('active');
};

const handleDelete = (index) => {
const newData = [...data];
newData.splice(index, 1);
setData(newData);
};

const handleEdit = (index) => {
const selectedData = data[index];
setName(selectedData.name);
setAge(selectedData.age);
setStatus(selectedData.status);
setSelectedIndex(index);
};

return (
<div className="App">
  <h1>Form Input Data</h1>
<form onSubmit={handleSubmit}>
<CompTiIn name={name} setName={setName} age={age} setAge={setAge} status={status} setStatus={setStatus} /> 
<CompButton type="submit">{selectedIndex === null ? 'Submit' : 'Update'}</CompButton>
</form>
<CompTable data={data} handleEdit={handleEdit} handleDelete={handleDelete} />
</div>
);
}

export default App;