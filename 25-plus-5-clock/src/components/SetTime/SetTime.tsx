import "./SetTime.scss";
import { BsArrowUpCircleFill } from "react-icons/bs";

type Props = {
  idTitle: string;
  idBtnDecrement: string;
  idBtnIncrement: string;
  idDisplayTime: string;
  working: boolean;
  title: string;
  time: number;
  setTime: Function;
};

const SetTime = (props: Props) => {
  const {
    idTitle,
    idBtnDecrement,
    idBtnIncrement,
    idDisplayTime,
    working,
    title,
    time,
    setTime,
  } = props;

  const handleTime = (operation: string) => {
    /**
     * Si se esta trabajando o descansando no se puede modidicar el tiempo
     */
    if (working) return;

    /**
     * Si el tiempo no esta entre 2 y 59 retornamos
     */
    if (!(time > 1 && time <= 59)) return;

    /**
     * Decrementamos el tiempo
     */
    if (operation === "decrement") {
      setTime(time - 1);
    }

    /**
     * Incrementamos el tiempo
     */
    if (operation === "increment") {
      setTime(time + 1);
    }
  };

  return (
    <div className="setTime">
      <p id={idTitle}>{title}</p>
      <div className="counterTime">
        <button
          id={idBtnDecrement}
          className="btnArrowDown"
          onClick={() => {
            handleTime("decrement");
          }}
        >
          <BsArrowUpCircleFill />
        </button>

        <p id={idDisplayTime}>{time}</p>

        <button
          id={idBtnIncrement}
          className="btnArrowUp"
          onClick={() => {
            handleTime("increment");
          }}
        >
          <BsArrowUpCircleFill />
        </button>
      </div>
    </div>
  );
};

export default SetTime;
