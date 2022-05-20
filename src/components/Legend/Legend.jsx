import React from "react";
import {
  WrapperStyled,
  LegendStyled,
  ValueLabelStyled,
  NameLabelStyled,
  MarkerStyled,
} from "./Legend.style";

const Legend = ({ list }) => {
  return (
    <WrapperStyled>
      {list.map((item) => (
        <LegendStyled key={item.name}>
          <ValueLabelStyled>
            <MarkerStyled bgColor={item.color} />
            <span>{item.value}</span>
          </ValueLabelStyled>
          <NameLabelStyled>{item.name}</NameLabelStyled>
        </LegendStyled>
      ))}
    </WrapperStyled>
  );
};

export default Legend;
