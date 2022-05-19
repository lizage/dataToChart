import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateInput } from "./redux/input/inputSlice";
import Titles from "./components/Titles/Titles";
import StackedChart from "./components/StackedChart/StackedChart";
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
      <Titles
        title={title}
        subTitle={subTitle}
        chartTitle={chartTitle}
        dataTotal={dataTotal}
      />
      <StackedChart list={dataList} />
    </div>
  );
};

export default App;
