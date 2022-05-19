import React from "react";
import { ItemStyled } from "./ChartItem.style";

const ChartItem = ({ flexBasis, bgColor }) => {
  return <ItemStyled flexBasis={flexBasis} bgColor={bgColor} />;
};

export default ChartItem;
