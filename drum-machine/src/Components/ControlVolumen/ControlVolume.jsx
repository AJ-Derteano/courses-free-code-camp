import { useState } from "react";
import { ContainerVolumen, Input } from "./ControlVolumeStyle";

export const ControlVolume = (props) => {

  const { setDisplay, setVolumen } = props;

  const [volRange, setVolRange] = useState("50% 100%");

  const handleVolumenRange = (evt) => {
    const { target } = evt;
    const min = target.min;
    const max = target.max;
    const val = target.value;
    setVolumen(val);
    setDisplay(`Volumen ${val}`);
    setVolRange(`${((val - min) * 100) / (max - min)}% 100%`);
    setTimeout(() => {
      setDisplay(``);
    }, 1000);
  };

  return (
    <ContainerVolumen>
      <Input
        type="range"
        min="0"
        max="100"
        volumen={volRange}
        onChange={(evt) => handleVolumenRange(evt)}
      />
    </ContainerVolumen>
  );
};
