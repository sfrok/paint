// Core
import styled from "styled-components";

export const Row = styled.div`
  margin-top: ${({ mt }) => `calc(50%/12 * ${mt})`};
  margin-bottom: ${({ mb }) => `calc(50%/12 * ${mb})`};
  margin-left: -15px;
  margin-right: -15px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
`;
