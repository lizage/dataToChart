import React from "react";
import { ErrorMsgStyled } from "./ErrorMsg.style";

const ErrorMsg = ({ message }) => {
  return <ErrorMsgStyled>{message}</ErrorMsgStyled>;
};

export default ErrorMsg;
