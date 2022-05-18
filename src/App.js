import { useSelector } from "react-redux";
import "./App.css";

const App = () => {
  const { dataList } = useSelector((state) => state.data);
  return <div className="App">{dataList[0]}</div>;
};

export default App;
