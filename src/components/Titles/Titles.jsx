import React from "react";
import {
  WrapperStyled,
  TitleStyled,
  SubTitleStyled,
  ChartTitleStyled,
} from "./Titles.style";

const Titles = ({ title, subTitle, chartTitle }) => {
  return (
    <WrapperStyled>
      <TitleStyled>{title}</TitleStyled>
      <SubTitleStyled>{subTitle}</SubTitleStyled>
      <ChartTitleStyled>{chartTitle}</ChartTitleStyled>
    </WrapperStyled>
  );
};

export default Titles;
