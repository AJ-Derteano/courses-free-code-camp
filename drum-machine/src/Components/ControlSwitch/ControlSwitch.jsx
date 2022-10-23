import { useEffect, useState } from "react";
import { ContainerSwitch, Switch } from "./ControlSwitchStyle";

export const ControlSwitch = (props) => {
  const { title, functionSwitch } = props;

  const [switchActive, setSwitchActive] = useState(false);

  useEffect(() => {
    functionSwitch(switchActive);
  }, [switchActive]);

  return (
    <ContainerSwitch>
      <p style={{ marginBottom: 0 }}>{title}</p>
      <Switch
        switchColor={switchActive ? "#e6e6e6" : "#666666"}
        style={{ justifyContent: switchActive ? "end" : "start" }}
        onClick={() => {
          setSwitchActive(!switchActive);
        }}
      />
    </ContainerSwitch>
  );
};
