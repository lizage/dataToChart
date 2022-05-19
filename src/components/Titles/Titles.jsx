import React from "react";
import {
  WrapperStyled,
  TitleStyled,
  SubTitleStyled,
  ChartTitleStyled,
} from "./Titles.style";

const Titles = ({ title, subTitle, chartTitle, dataTotal }) => {
  return (
    <WrapperStyled>
      <TitleStyled>{title}</TitleStyled>
      <SubTitleStyled>{subTitle}</SubTitleStyled>
      <ChartTitleStyled>{`${chartTitle}: ${dataTotal}`}</ChartTitleStyled>
    </WrapperStyled>
  );
};

export default Titles;
