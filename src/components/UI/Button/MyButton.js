import './MyButton.scss';

// custom button component
function MyButton(props) {
  return (
    <button
    onClick={props.click}
    className={props.class}
    >{props.children}</button>
  )
}

export default MyButton;