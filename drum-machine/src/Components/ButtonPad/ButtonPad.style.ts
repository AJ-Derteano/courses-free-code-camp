import styled from "styled-components";

const padWidth: string = "80px;";
const padHeight: string = "80px;";

export const DrumPad = styled.button`
  height: ${padHeight};
  width: ${padWidth};

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.5em;
  font-weight: 700;
  text-align: center;
  color: #fff;

  background-color: #4d4d4d;
  border-radius: 5px;
  box-shadow: 8px 8px 2px -3px rgba(0, 0, 0, 0.1);

  :hover {
    cursor: pointer;
    // box-shadow: 10px 10px 2px -3px rgba(0, 0, 0, 0.2);
  }

  &:focus {
    outline: none;
    border: none;
    background-color: #3e3e3e;
    color: #dbdbdb;
    box-shadow: 0px 0px 30px -3px rgba(0, 0, 0, 0.5);
  }
`;
