import styled from "styled-components";

export const WrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const TileStyled = styled.div`
  padding: 1rem;
  width: 12rem;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 25%;
  margin-bottom: 2rem;
  text-align: center;
  min-width: 14rem;
`;

export const ValueLabelStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  > span {
    color: #333;
    font-size: 2.6rem;
  }
`;

export const NameLabelStyled = styled.div`
  font-size: 1.6rem;
`;

export const MarkerStyled = styled.div`
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "transparent")};
  height: 1.3rem;
  width: 1.3rem;
  border-radius: 50%;
`;
