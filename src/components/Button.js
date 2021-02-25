import "../styles/Button.css";
import { generateCell } from "../actions";
import { useDispatch } from "react-redux";

function Button() {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => {
        dispatch(generateCell());
      }}
    >
      Сотворить
    </button>
  );
}

export default Button;
