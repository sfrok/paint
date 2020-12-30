// Core
import styled from "styled-components";

export const Container = styled.div`
  padding: 0 15px;
  margin: 0 auto;
  color: ${({ theme }) => theme.palette.secondary};

  ${({ theme }) => theme.breakpoints.md} {
    width: ${({ theme }) => theme.width.bellow768};
  }

  ${({ theme }) => theme.breakpoints.lg} {
    width: ${({ theme }) => theme.width.bellow992};
  }

  ${({ theme }) => theme.breakpoints.xl} {
    width: ${({ theme }) => theme.width.bellow1200};
  }
`;
