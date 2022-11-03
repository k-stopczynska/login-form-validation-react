import './LoginItem.css';

const LoginItem = (props) => {
    return (
        <li className="login-item">{props.name} ({props.age} years old)</li>
    )
}

export default LoginItem;