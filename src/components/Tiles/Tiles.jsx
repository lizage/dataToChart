import React from "react";
import {
  WrapperStyled,
  TileStyled,
  ValueLabelStyled,
  NameLabelStyled,
  MarkerStyled,
} from "./Tiles.style";

const Tiles = ({ list }) => {
  return (
    <WrapperStyled>
      {list.map((item) => (
        <TileStyled key={item.name}>
          <ValueLabelStyled>
            <MarkerStyled bgColor={item.color} />
            <span>{item.value}</span>
          </ValueLabelStyled>
          <NameLabelStyled>{item.name}</NameLabelStyled>
        </TileStyled>
      ))}
    </WrapperStyled>
  );
};

export default Tiles;
