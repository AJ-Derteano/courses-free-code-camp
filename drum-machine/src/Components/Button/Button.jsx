import { Button } from "./ButtonStyle";

const ButtonPad = (props) => {
  const { keyCode, keyTrigger, id, url, playSound } = props;

  return (
    <Button
      id={id}
      className="drum-pad"
      key={keyCode}
      onClick={(evt) => {
        playSound(keyTrigger);
      }}
    >
      {keyTrigger}
      <audio className="clip" id={keyTrigger} src={url} />
    </Button>
  );
};

export default ButtonPad;
