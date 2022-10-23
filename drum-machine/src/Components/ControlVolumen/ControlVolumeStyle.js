import styled from "styled-components";

const ContainerVolumen = styled.div``;

const Input = styled.input`
  -webkit-appearance: none;
  display: inline-block;
  vertical-align: middle;
  font-size: 1em;
  font-family: Arial, sans-serif;
  margin-right: 15px;
  width: 100%;
  height: 7px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 5px;
  background-image: linear-gradient(#1a1a1a, #1a1a1a);
  background-size: ${(props) => props.volumen};
  background-repeat: no-repeat;

  &:hover {
    cursor: pointer;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: #666666;
    cursor: ew-resize;
    box-shadow: 0 0 2px 0 #555;
    transition: background 0.5s ease-in-out;
    &:hover {
      background: #e6e6e6;
    }
  }

  &::-moz-range-thumb {
    -webkit-appearance: none;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: #ff4500;
    cursor: ew-resize;
    box-shadow: 0 0 2px 0 #555;
    transition: background 0.5s ease-in-out;
    &:hover {
      background: #ff0200;
    }
  }

  &::-ms-thumb {
    -webkit-appearance: none;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: #ff4500;
    cursor: ew-resize;
    box-shadow: 0 0 2px 0 #555;
    transition: background 0.5s ease-in-out;
    &:hover {
      background: #ff0200;
    }
  }

  &::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
  }

  &::-moz-range-track {
    -webkit-appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
  }

  &::-ms-track {
    -webkit-appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
  }
`;

export { ContainerVolumen, Input };
