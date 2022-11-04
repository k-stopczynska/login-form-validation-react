import { useState } from "react";
import "./App.css";
import LoginForm from "./components/LoginForm";
import LoginList from "./components/LoginList";
import ErrorModal from "./components/ErrorModal";

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
  const [isValid, setIsValid] = useState("everything under Ctrl");

  const addingNewUserHandler = (userData) => {
    setNewUsers((prevState) => {
      return [userData, ...prevState];
    });
  };

  const invalidFormHandler = (message) => {
    message === "empty input"
      ? setIsValid("empty input")
      : message === "invalid age"
      ? setIsValid("invalid age")
      : setIsValid("everything under Ctrl");
  };

  const errorModalClassHandler = () => {
    return isValid === "empty input"
      ? "empty-input"
      : isValid === "invalid-age"
      ? "invalid age"
      : "hidden";
  };

  return (
    <div className="App">
      <LoginForm
        onAddingNewUser={addingNewUserHandler}
        onInvalidForm={invalidFormHandler}
      />
      <LoginList users={newUsers} />
      <ErrorModal className={errorModalClassHandler()} />
    </div>
  );
}

export default App;
