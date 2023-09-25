import { useState } from "react";

const Parent = () => {
  const [state, setState] = useState({
    name: "John Doe Jonny",
    age: 30,
    phone: "123545",
  });
  const [name, setName] = useState("Sourav Ojha");

  const handleNameChange = (e) => {
    // e.target.value
    setName(e.target.value);
  };

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h1>Parent</h1>
      <Child1 name={name} handleChange={handleNameChange} />
      <Child2 user={state} handleChange={handleChange} />
    </div>
  );
};

export default Parent;

const Child1 = ({ name, handleChange }) => {
  return (
    <div>
      <h2>Child 1</h2>
      <div>{name}</div>
      <input type="text" name="username" value={name} onChange={handleChange} />
    </div>
  );
};
const Child2 = ({ user, handleChange }) => {
  return (
    <div>
      <h2>Child 2</h2>
      <div>{user.age}</div>
      <div>{user.phone}</div>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleChange}
      />
      <input
        type="number"
        name="age"
        value={user.age}
        onChange={handleChange}
      />
      <input
        type="text"
        name="phone"
        value={user.phone}
        onChange={handleChange}
      />
    </div>
  );
};
