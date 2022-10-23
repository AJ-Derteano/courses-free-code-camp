import { useEffect, useState } from "react";
import { NumPad } from "../NumPad/NumPad";
import { SwitchControl } from "../Switch/Switch";
import { VolumenControl } from "../VolumenControl/VolumenControl";
import { NumPadMusicStyle } from "./NumPadMusic.style";

const title: object = {
  width: "150px",
  height: "3rem",
  lineHeight: "3rem",
  margin: "15px auto",
  fontSize: "1rem",
  fontWeight: 700,
  backgroundColor: "#4d4d4d",
  borderRadius: "10px",
};

const NumPadMusic = () => {
  const [volumen, setVolumen] = useState(50);
  const [display, setDisplay] = useState("");
  const [bankMusic, setBankMusic] = useState();
  const [touchPad, setTouchPad] = useState("");
  const [power, setPower] = useState();

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
    <NumPadMusicStyle id="drum-machine">
      <p>Drum Pad</p>
      <NumPad
        volumen={volumen}
        power={power}
        bankMusic={bankMusic}
        setTouchPad={setTouchPad}
      />
      <div>
        <SwitchControl title="Power" functionSwitch={setPower} />
        <p id="display" style={title}>
          {display}
        </p>
        <VolumenControl setDisplay={setDisplay} setVolumen={setVolumen} />
        <SwitchControl title="Bank" functionSwitch={setBankMusic} />
      </div>
    </NumPadMusicStyle>
  );
};

export default NumPadMusic;
