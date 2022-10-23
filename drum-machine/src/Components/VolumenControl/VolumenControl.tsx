import { useState } from "react";
import { ContainerVolumen, Input } from "./VolumenControl.style";

export const VolumenControl = (props) => {
  const { setDisplay, setVolumen } = props;
  const [volRange, setVolRange] = useState("50% 100%");

  const handleVolumenRange = (e: Object): void => {
    const { target } = e;
    const min: number = target.min;
    const max: number = target.max;
    const val: number = target.value;
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
        onChange={(e) => handleVolumenRange(e)}
      />
    </ContainerVolumen>
  );
};
