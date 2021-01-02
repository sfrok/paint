// Core
import styled from "styled-components";

export const ImageItem = styled.img.attrs(({ image }) => ({
  src: image,
}))`
  cursor: pointer;
  margin: 0 15px;
  transition: 0.4s;
  :hover {
    transform: scale(1.3);
  }
`;
