import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateInput } from "./redux/input/inputSlice";
import { input } from "./resource";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const { dataList, dataTotal } = useSelector((state) => state.data);
  const { title, subTitle, chartTitle } = useSelector((state) => state.titles);

  useEffect(() => {
    dispatch(updateInput(input));
  }, [input]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="App">
      <div>{title}</div>
      <div>{subTitle}</div>
      <div>{chartTitle}</div>
      <div>{dataTotal}</div>
      <div>{dataList.length}</div>
    </div>
  );
};

export default App;
