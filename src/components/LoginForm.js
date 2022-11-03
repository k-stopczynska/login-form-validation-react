import { useState } from "react";
import "./LoginForm.css";

const LoginForm = (props) => {
  const [userLogin, setUserLogin] = useState({ userName: "", userAge: "" });

  const changeNameHandler = (e) => {
    setUserLogin((prevState) => {
      return {
        ...prevState,
        userName: e.target.value,
      };
    });
  };

  const changeAgeHandler = (e) => {
    if (e.target.value <= 0) {
      return;
    } else {
    setUserLogin((prevState) => {
      return {
        ...prevState,
        userAge: e.target.value,
      };
    });
  }
  };

  const inputValidation = ()=> {
    if (!changeAgeHandler || userLogin.userName === '' || userLogin.userAge === '') {
return false;
    }
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (inputValidation) {
      return
    } else {
    const userData = {
      name: userLogin.userName,
      age: userLogin.userAge,
      id: Math.random().toString(),
    };
    props.onAddingNewUser(userData);
    setUserLogin({ userName:"", userAge:"" })
  };
}

  return (
    <form className="login-form" type="submit" onSubmit={onSubmitHandler}>
      <div className="form-controls">
        <div className="form-control">
          <label for="username" name="username">
            Username
          </label>
          <input type="text" id="username" onChange={changeNameHandler}></input>
        </div>
        <div className="form-control">
          <label for="age" name="age">
            Age (Years)
          </label>
          <input
            type="number"
            id="age"
            step="1"
            onChange={changeAgeHandler}
          ></input>
        </div>
      </div>
      <button type="submit" className="button">
        Add User
      </button>
    </form>
  );
};

export default LoginForm;
