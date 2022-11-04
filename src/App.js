import { useState } from "react";
import "./App.css";
import LoginForm from "./components/LoginForm";
import LoginList from "./components/LoginList";

const users = [
  {
    id: "id1",
    name: "Max",
    age: 31,
  },
  {
    id: "id2",
    name: "John",
    age: 28,
  },
  {
    id: "id3",
    name: "Klaudia",
    age: 37,
  },
];

function App() {
  const [newUsers, setNewUsers] = useState(users);

  const addingNewUserHandler = (userData) => {
    setNewUsers((prevState) => {
      return [userData, ...prevState];
    });
  };

  const invalidFormHandler = (message) => {
    message === "empty input"
      ? console.log("empty input")
      : message === "invalid age"
      ? console.log("invalid age")
      : console.log("everything under Ctrl");
  };

  return (
    <div className="App">
      <LoginForm
        onAddingNewUser={addingNewUserHandler}
        onInvalidForm={invalidFormHandler}
      />
      <LoginList users={newUsers} />
    </div>
  );
}

export default App;
