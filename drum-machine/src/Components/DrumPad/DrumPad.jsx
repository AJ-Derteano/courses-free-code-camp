import { useEffect, useState } from "react";
import { ButtonsPad } from "../ButtonsPad/ButtonsPad";
import { ControlSwitch } from "../ControlSwitch/ControlSwitch";
import { ControlVolume } from "../ControlVolumen/ControlVolume";
import { DrumPadStyle } from "./DrumPadStyle";

const title = {
  width: "150px",
  height: "3rem",
  lineHeight: "3rem",
  margin: "15px auto",
  fontSize: "1rem",
  fontWeight: 700,
  backgroundColor: "#4d4d4d",
  borderRadius: "10px",
};

const DrumPad = () => {

  const [volumen, setVolumen] = useState(50);
  const [display, setDisplay] = useState("");
  const [bankMusic, setBankMusic] = useState();
  const [touchPad, setTouchPad] = useState("");
  const [power, setPower] = useState(true);

  useEffect(() => {
    setDisplay(!power ? "OFF" : "");
  }, [power]);

  useEffect(() => {
    setDisplay(!bankMusic ? "Heater Ki" : "Smoot Piano Kit");
  }, [bankMusic]);

  useEffect(() => {
    setDisplay(touchPad);
  }, [touchPad]);

  return (
    <DrumPadStyle id="drum-machine">
      <p>Drum Pad</p>
      <ButtonsPad
        volumen={volumen}
        power={power}
        bankMusic={bankMusic}
        setTouchPad={setTouchPad}
      />
      <div>
        <ControlSwitch title="Power" functionSwitch={setPower} />
        <p id="display" style={title}>
          {display}
        </p>
        <ControlVolume setDisplay={setDisplay} setVolumen={setVolumen} />
        <ControlSwitch title="Bank" functionSwitch={setBankMusic} />
      </div>
    </DrumPadStyle>
  );
};

export default DrumPad;