import styled from "styled-components";

export const DrumPadStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;

  border: 5px solid #717171;

  grid-gap: 10px;

  padding: 20px;
  box-shadow: 15px 15px 5px -3px rgba(0, 0, 0, 0.3);

  p {
    margin: 0;
    grid-column: 2/2;
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto, repeat(2, 1fr);
    p {
      grid-column: 1/2;
    }
  }
`;
