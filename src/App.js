import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateInput } from "./redux/input/inputSlice";
import Titles from "./components/Titles/Titles";
import StackedChart from "./components/StackedChart/StackedChart";
import Legend from "./components/Legend/Legend";
import BarGraph from "./components/BarGraph/BarGraph";
import ErrorMsg from "./components/ErrorMsg/ErrorMsg";
import { input } from "./resource";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const { isInput } = useSelector((state) => state.input);
  const { dataList, dataTotal } = useSelector((state) => state.data);
  const { title, subTitle, chartTitle } = useSelector((state) => state.titles);
  const { errorMsg } = useSelector((state) => state.errorMsg);

  useEffect(() => {
    dispatch(updateInput(input));
  }, [input]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="App">
      {isInput ? (
        <>
          <Titles
            title={title}
            subTitle={subTitle}
            chartTitle={chartTitle}
            dataTotal={dataTotal}
          />
          <StackedChart list={dataList} />
          <Legend list={dataList} />
          <BarGraph list={dataList} />
        </>
      ) : (
        <ErrorMsg message={errorMsg} />
      )}
    </div>
  );
};

export default App;
