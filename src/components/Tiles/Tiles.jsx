import React from "react";
import { WrapperStyled, TileStyled } from "./Tiles.style";

const Tiles = ({ list }) => {
  return (
    <WrapperStyled>
      {list.map((item) => (
        <TileStyled key={item.name}>
          <div>{item.name}</div>
          <div>{item.value}</div>
          <div>{item.color}</div>
        </TileStyled>
      ))}
    </WrapperStyled>
  );
};

export default Tiles;
