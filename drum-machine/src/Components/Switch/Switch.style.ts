import styled from "styled-components";

const ContainerSwitch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

const Switch = styled.span`
  width: 55px;
  height: 22px;
  background-color: #1a1a1a;
  border-radius: 6px;
  position: relative;
  display: flex;
  justify-content: start;
  align-items: center;

  &:after {
    content: "";
    position: "absolute";
    width: 25px;
    height: 16px;
    background-color: ${(props) => props.switchColor};
    border-radius: 5px;
    margin: 0 6px;
  }
`;

export { Switch, ContainerSwitch };
