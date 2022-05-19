import styled from "styled-components";

export const WrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0;
  flex: 1 1;

  @media (min-width: 600px) {
    flex-wrap: nowrap;
  }
`;

export const TileStyled = styled.div`
  border: solid 1px #ccc;
  padding: 1rem;
  width: 10rem;
  flex-grow: 0;
  flex-shrink: 0;
  border-radius: 0.4rem;
  margin-bottom: 2rem;
`;
