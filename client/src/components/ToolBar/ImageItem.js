// Core
import styled from "styled-components";

export const ImageItem = styled.img.attrs(({ image }) => ({
  src: image,
}))`
  cursor: pointer;
  margin: 0 15px;
`;
