import "./ControlTime.scss";

import {
  BsFillPlayCircleFill,
  BsFillPauseCircleFill,
  BsBootstrapReboot,
} from "react-icons/bs";
import { useEffect, useState } from "react";

type Props = {
  title: Array<string>;

  working: boolean;
  setWorking: Function;

  setTimeBreak: Function;
  timeBreak: number;

  setTimeWork: Function;
  timeWork: number;
};

const ControlTime = (props: Props) => {
  /**
   * * Props
   */
  const {
    title,
    working,
    setWorking,

    setTimeBreak,
    timeBreak,

    setTimeWork,
    timeWork,
  } = props;

  /**
   * * Use State
   */
  const [minutes, setMinutes] = useState(timeWork);
  const [seconds, setSeconds] = useState(0);
  const [isBreak, setIsBreak] = useState(false);
  const [color, setColor] = useState("default-color");

  /**
   * * Vars
   */
  const colorText = {
    default: "default-color",
    colorTime: "color-work-time",
    coloBreak: "color-break",
  };

  /**
   * Use effect
   */
  useEffect(() => {
    setMinutes(timeWork);
  }, [timeWork]);

  useEffect(() => {
    let interval: string | number | NodeJS.Timeout | undefined;
    let lMinutes: number = minutes;
    let lSeconds: number = seconds;
    let lIsBreak: boolean = isBreak;
    let lColor: string = color;

    if (working) {
      interval = setInterval(() => {
        /**
         * * Descontar segundos
         */
        if (lSeconds > 0 && lMinutes >= 0) {
          lSeconds = lSeconds - 1;
        }

        /**
         * * Descontar minutos
         */
        if (lSeconds === 0 && lMinutes > 0) {
          lMinutes = lMinutes - 1;
          lSeconds = 60;
        }

        /**
         * * Cambiar a descanso
         */
        if (lSeconds === 0 && lMinutes === 0 && isBreak === false) {
          lIsBreak = !lIsBreak;

          lMinutes = timeBreak - 1;
          lSeconds = 3;
        }

        /**
         * * Cambiar a trabajo
         */
        if (lSeconds === 0 && lMinutes === 0 && isBreak) {
          lIsBreak = !lIsBreak;

          lMinutes = timeWork - 1;
          lSeconds = 3;
        }

        /**
         * * Cambiar el color de texto
         */
        if (lMinutes < 3) {
          lColor = colorText.colorTime;
        }

        if (lMinutes > 3) {
          lColor = colorText.default;
        }

        /**
         * * Notificar final del tiempo
         */
        /* if (lMinutes < 3) {
          let audio = document.getElementById("audio") as HTMLAudioElement;
          if (audio) {
            audio?.play();
          }
        } */

        setColor(lColor);
        setIsBreak(lIsBreak);
        setSeconds(lSeconds);
        setMinutes(lMinutes);
      }, 1000);
    } else {
      setMinutes(lMinutes);
      setSeconds(lSeconds);
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [working]);

  /**
   * * Function
   */

  const resetTimer = () => {
    setTimeWork(25);
    setTimeBreak(5);

    setMinutes(minutes);
    setSeconds(0);
    setWorking(false);
  };

  const playTimer = () => {
    /**
     * Iniciar o pausar el trabajo
     *    working = true    Contabilizando
     *    working = false   Pausado
     */
    setWorking(!working);

    if (working) {
      setMinutes(minutes);
      setSeconds(seconds);
    }
  };

  return (
    <div className="containerControlTime">
      <div className="controlTime">
        <p id="timer-label" className={color}>
          {!isBreak ? title[0] : title[1]}
        </p>
        <p id="time-left" className={color}>
          {`${minutes < 10 ? "0" : ""}${minutes}:${
            seconds < 10 ? "0" : ""
          }${seconds}`}
        </p>
      </div>
      <div className="controls">
        <button id="start_stop" onClick={playTimer}>
          {!working ? <BsFillPlayCircleFill /> : <BsFillPauseCircleFill />}
        </button>
        <button id="reset" onClick={resetTimer}>
          <BsBootstrapReboot />
        </button>
      </div>
      <audio
        id="audio"
        src="https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"
      >
        Not support audio TAG
      </audio>
    </div>
  );
};

export default ControlTime;
