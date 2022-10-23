import Button from "../Button/Button";
import { bankOne, bankTwo } from "./Bank";
import { ButtonsPadStyle } from "./ButtonsPadStyle";

export const ButtonsPad = (props) => {
  const { volumen, power, bankMusic, setTouchPad } = props;

  const handleKeyPress = (evt) => {
    const key = evt.key.toUpperCase();
    playSound(key);
  };

  window.onkeydown = handleKeyPress;

  const playSound = (keyTrigger) => {
    const audio = document.getElementById(keyTrigger);
    const button = audio.closest("button");

    button.focus();

    setTimeout(() => button.blur(), 100);

    if (!power) return;

    if (audio) {
      audio.currentTime = 0;
      audio.volume = volumen / 100;
      audio.play();
      setTouchPad(button.id);
    }
  };

  return (
    <ButtonsPadStyle>
      {!bankMusic
        ? bankOne.map((bank) => (
            <Button
              key={bank.keyCode}
              keyCode={bank.keyCode}
              keyTrigger={bank.keyTrigger}
              id={bank.id}
              url={bank.url}
              playSound={playSound}
              power={power}
            />
          ))
        : bankTwo.map((bank) => (
            <Button
              key={bank.keyCode}
              keyCode={bank.keyCode}
              keyTrigger={bank.keyTrigger}
              id={bank.id}
              url={bank.url}
              playSound={playSound}
              power={power}
            />
          ))}
    </ButtonsPadStyle>
  );
};
