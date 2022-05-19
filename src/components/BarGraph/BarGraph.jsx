import React from "react";
import { WrapperStyled, BarStyled } from "./BarGraph.style";

const BarGraph = ({ list }) => {
  return (
    <WrapperStyled>
      {list.map((item) => (
        <BarStyled key={item.name} bgColor={item.color} height={item.percent} />
      ))}
    </WrapperStyled>
  );
};

export default BarGraph;
