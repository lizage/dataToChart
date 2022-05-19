import styled from "styled-components";

export const WrapperStyled = styled.div`
  width: 100%;
  margin-bottom: 2rem;
`;

export const ChartStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0;
`;

export const ItemStyled = styled.div`
  height: 2rem;
  width: auto;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: ${({ flexBasis }) => (flexBasis ? flexBasis : "auto")};
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "transparent")};
  //   border-top-right-radius: 0.4rem;
  //   border-bottom-right-radius: 0.4rem;
`;
