import styled from "styled-components";

export const WrapperStyled = styled.div`
  width: 100%;
  height: 30rem;
  border: solid 1px #ccc;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  flex: 1 1;
`;

export const BarStyled = styled.div`
  width: 5%;
  height: ${({ height }) => (height ? height : "auto")};
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "transparent")};
`;
