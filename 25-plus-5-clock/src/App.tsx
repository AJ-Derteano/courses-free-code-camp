import "./App.scss";
import { useState } from "react";
import { ControlTime, SetTime } from "./components";

function App() {
  /**
   * Hooks
   */
  const [timeBreak, setTimeBreak] = useState(5);
  const [timeWork, setTimeWork] = useState(25);
  const [working, setWorking] = useState(false);

  return (
    <div className="app">
      <h2>Pomodoro App</h2>
      <SetTime
        idTitle="break-label"
        idBtnDecrement="break-decrement"
        idBtnIncrement="break-increment"
        idDisplayTime="break-length"
        working={working}
        title="Descanso"
        time={timeBreak}
        setTime={setTimeBreak}
      />

      <SetTime
        idTitle="session-label"
        idBtnDecrement="session-decrement"
        idBtnIncrement="session-increment"
        idDisplayTime="session-length"
        working={working}
        title="Trabajo"
        time={timeWork}
        setTime={setTimeWork}
      />

      <ControlTime
        title={["Trabajando", "Descansando"]}
        timeWork={timeWork}
        timeBreak={timeBreak}
        working={working}
        setWorking={setWorking}
        setTimeBreak={setTimeBreak}
        setTimeWork={setTimeWork}
      />

      <div className="developer">
        <hr />
        <p>
          <i>
            Desarrollado por{" "}
            <a
              href="https://github.com/AJ-Derteano"
              target="_blank"
              rel="noreferrer"
            >
              AJ Derteano
            </a>
          </i>
        </p>
        <hr />
      </div>
    </div>
  );
}

export default App;
