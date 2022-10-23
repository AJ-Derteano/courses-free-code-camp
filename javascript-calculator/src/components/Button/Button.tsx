import { Ibutton } from "../../interfaces/Button";
import "./Button.scss";

interface Props extends Ibutton {
  setValue: Function;
  setType: Function;
}

const Button = (props: Props) => {
  /**
   * Props
   */
  const { id, value, type, setValue, setType } = props;

  /**
   * Function
   */
  const handleClick = () => {
    setType(type);
    setValue(value);
  };

  return (
    <button id={id} value={value} className={type} onClick={handleClick}>
      {value}
    </button>
  );
};

export default Button;
