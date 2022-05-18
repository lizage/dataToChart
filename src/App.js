import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateDataList } from "./redux/data/dataSlice";
import {
  updateTitle,
  updateSubTitle,
  updateChartTitle,
} from "./redux/titles/titlesSlice";
import { input } from "./resource";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const { dataList, dataTotal, dataObj } = useSelector((state) => state.data);
  const { title, subTitle, chartTitle } = useSelector((state) => state.titles);

  useEffect(() => {
    dispatch(updateTitle(input.title));
    dispatch(updateSubTitle(input.subTitle));
    dispatch(updateChartTitle(input.chartTitle));
    dispatch(updateDataList(input.data));
  }, [input]);

  return (
    <div className="App">
      <div>{title}</div>
      <div>{subTitle}</div>
      <div>{chartTitle}</div>
      <div>{dataTotal}</div>
    </div>
  );
};

export default App;
