// Core
import styled from "styled-components";

export const Column = styled.div`
  margin: 0 15px;
  width: ${({ width }) => `calc(100% / 12 * ${width} - 30px)`};
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: ${({ contentPosition }) => contentPosition};
`;
