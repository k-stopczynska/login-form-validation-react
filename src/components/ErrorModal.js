import "./ErrorModal.css";

const ErrorModal = (props) => {

    const onClickHandler = () => {
       props.newClass('')
    }
  return (
    <div className={`overlay ${props.className}`} onClick={onClickHandler}>
      <div className="error-modal__content">
        <h1>Invalid Input</h1>
        {props.className === 'invalid-age' ?  <p>Please enter a valid age (more than 0)</p> :
         <p>Please enter a valid name and age (non-empty values).</p>
        }
        <button type="button" className="button" onClick={onClickHandler}>
          Okay
        </button>
      </div>
    </div>
  );
};
export default ErrorModal;
