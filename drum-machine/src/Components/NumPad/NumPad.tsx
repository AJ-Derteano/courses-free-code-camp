import { useEffect, useState } from "react";
import ButtonPad from "../ButtonPad/ButtonPad";
import { bankOne, bankTwo } from "./Bank";
import { NumPadStyle } from "./NumPad.style";

export const NumPad = (props) => {
  const { volumen, power, bankMusic, setTouchPad } = props;
  const [btnPadActive, setBtnPadActive] = useState(false);

  const handleKeyPress = (e) => {
    const key = e.key.toUpperCase();
    playSound(key, e.keyCode);
  };

  window.onkeydown = handleKeyPress;

  const playSound = (keyTrigger: string, keyCode: string, id: string) => {
    const btnPad = document.getElementById(keyCode);
    if (btnPad) {
      btnPad.focus();
      setTimeout(() => btnPad.blur(), 100);
    }

    if (!power) return;

    const audio = document.getElementById(keyTrigger);
    if (audio) {
      audio.currentTime = 0;
      audio.volume = volumen / 100;
      audio.play();
      console.log(id);
      setTouchPad(id);
    }
  };

  return (
    <NumPadStyle>
      {!bankMusic
        ? bankOne.map((bank: object) => (
            <ButtonPad
              key={bank.keyCode}
              keyCode={bank.keyCode}
              keyTrigger={bank.keyTrigger}
              id={bank.id}
              url={bank.url}
              playSound={playSound}
              power={power}
            />
          ))
        : bankTwo.map((bank: object) => (
            <ButtonPad
              key={bank.keyCode}
              keyCode={bank.keyCode}
              keyTrigger={bank.keyTrigger}
              id={bank.id}
              url={bank.url}
              playSound={playSound}
              power={power}
            />
          ))}
    </NumPadStyle>
  );
};
