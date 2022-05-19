import React from "react";
import { WrapperStyled, ChartStyled, ItemStyled } from "./StackedChart.style";

const StackedChart = ({ list }) => {
  return (
    <WrapperStyled>
      <ChartStyled>
        {list.map((item) => (
          <ItemStyled
            key={item.name}
            bgColor={item.color}
            flexBasis={item.percent}
          />
        ))}
      </ChartStyled>
    </WrapperStyled>
  );
};

export default StackedChart;
