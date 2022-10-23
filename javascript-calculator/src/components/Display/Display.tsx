import { useEffect, useState } from "react";
import "./Display.scss";

interface Props {
  value: string | number;
  type: string;
}

const Display = (props: Props) => {
  /**
   * Props
   */
  const { value, type } = props;

  /**
   * Variables
   */
  const isOperator = "*-+/",
    endsWithOperator = "*+/",
    endsWithNegativeSign = /\d[x/+‑]{1}‑$/;

  /**
   * State
   */
  const [screen, setScreen] = useState("");
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    let lScreen: string = "";
    let lDisplay: string = "";

    /**
     * ? Type number
     */
    if (type.includes("number")) {
      /**
       * Si display es 0 y screen esta vacio
       *    screen
       *    display 09 => 9
       *    screen   9
       */
      if (display === "0" && value !== "0" && screen.length === 0) {
        lScreen = `${value}`;
        lDisplay = `${value}`;
      }

      /**
       * Si screen ya tiene contenido y display es 0
       *    screen   78-
       *    display 078 => 78
       *    screen   78-78
       */
      if (display === "0" && value !== "0" && screen.length !== 0) {
        lScreen = `${screen.slice(0, -1)}${value}`;
        lDisplay = `${value}`;
      }

      /**
       * Si screen ya tiene datos, se guardan y se junta con el valor de entrada
       */
      if (display !== "0" && value !== "0") {
        lDisplay = `${display}${value}`;
        lScreen = `${screen}${value}`;
      }

      /**
       * Si el valor del display es un operador se quita
       *    /96 => 96
       *    *96 => 96
       */
      if (isOperator.includes(display.charAt(0))) {
        lDisplay = `${display.slice(1)}${value}`;
      }

      /**
       * Si lo que se muestra en display ya es un resultado,
       * este se toma para un nuevo calculo
       */
      if (screen.includes("=")) {
        lDisplay = `${value}`;
        lScreen = `${value}`;
      }
    }

    /**
     * ? Type decimal
     */
    if (type.includes("decimal")) {
      /**
       * si el screen ya contiene un decimal retornamo
       */
      if (display.includes(".")) return;

      /**
       * Si al escribir un decimal hay un 0 adelante se mantiene
       *    screen    9+
       *    display   0.9
       *    scren     9+0.9
       */
      lScreen = `${screen}${value}`;
      lDisplay = `${display}${value}`;
    }

    /**
     * ? Type operation
     */
    if (type.includes("operation")) {
      /**
       * Si hay contenido en display, se muestra lo de screen junto con le value
       */
      if (display.length > 0) {
        lScreen = `${screen}${value}`;
      }

      /**
       * Si ya se tiene un operador no se puede ingresar otro
       * 5*-5
       */
      if (endsWithOperator.includes(screen.charAt(screen.length - 1))) {
        lScreen = `${screen.slice(0, -1)}${value}`;
      }

      /**
       * Si lo que se muestra en display ya es un resultado,
       * este se toma para un nuevo calculo
       */
      if (screen.includes("=")) {
        lScreen = `${display}${value}`;
      }

      lDisplay = value.toString();
    }

    /**
     * ? Type equals
     */
    if (type.includes("equals")) {
      let formula: string = `${screen}`;

      while (endsWithOperator.includes(formula.charAt(formula.length - 1))) {
        formula = formula.slice(0, -1);
      }

      formula = formula.replace("--", "+0+0+0+0+0+0+");
      let answer: number = eval(formula);

      lScreen = `${screen}=${answer}`;
      lDisplay = `${answer}`;
    }

    /**
     * ? Type clear
     */
    if (type.includes("clear")) {
      /**
       * Al limpiar se limpia el screen de la formula
       * y se pasa ha 0 el el display
       */
      lScreen = "";
      lDisplay = "0";
    }

    setScreen(lScreen);
    setDisplay(lDisplay);
  }, [value]);

  return (
    <div className="containerDisplay">
      <div className="formulaScreen">{screen}</div>
      <div id="display" className="displayScreen">
        {display}
      </div>
    </div>
  );
};

export default Display;
