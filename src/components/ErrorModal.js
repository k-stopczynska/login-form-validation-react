import './ErrorModal.css';

const ErrorModal = (props) => {
return (
    <div className="overlay">
        <div className="error-modal-content">
            <h1>Invalid Input</h1>
            <p>Please enter a valid name and age (non-empty values).</p>
            <p>Please enter a valid age (more than 0)</p>
            <button type="button">Okay</button>
        </div>
    </div>
)
}
export default ErrorModal;