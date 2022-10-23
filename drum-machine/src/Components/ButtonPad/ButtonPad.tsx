import { useEffect } from "react";
import { DrumPad } from "./ButtonPad.style";

type ButtonPadProps = {
  keyCode: number;
  keyTrigger: string;
  id: string;
  url: string;
  playSound: Function;
};

const ButtonPad = ({
  keyCode,
  keyTrigger,
  id,
  url,
  playSound,
}: ButtonPadProps) => {
  return (
    <DrumPad
      className="drum-pad"
      id={keyCode}
      key={keyCode}
      onClick={() => {
        playSound(keyTrigger, keyCode, id);
      }}
    >
      {keyTrigger}
      <audio className="clip" id={keyTrigger} src={url} />
    </DrumPad>
  );
};

export default ButtonPad;
