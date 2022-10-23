import { Ibutton } from "../../interfaces/Button";
import Button from "../Button/Button";
import "./NumericKeyboard.scss";

interface Props {
  setValue : Function;
  setType : Function;
  button: Array<Ibutton>;
}

const NumericKeyboard = (props: Props) => {
  const { button, setValue, setType } = props;

  return (
    <div className="NumericKeyboard">
      {button.map((button: Ibutton) => {
        return (
          <Button
            key={button.id}
            id={button.id}
            value={button.value}
            type={button.type}
            setValue = {setValue}
            setType = {setType}
          />
        );
      })}
    </div>
  );
};

export default NumericKeyboard;
