import "./LoginList.css";
import LoginItem from "./LoginItem";

const LoginList = (props) => {
  return (
    <ul className="login-list">
      {props.users.map((user) => (
        <LoginItem users={props.users} key={user.id} name={user.name} age={user.age}></LoginItem>
      ))}
    </ul>
  );
};

export default LoginList;
