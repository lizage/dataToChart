import { updateDataObj, updateDataTotal } from "../data/dataSlice";
import { colors } from "../../resource";

export const dataMiddleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action);

    if (action.payload) {
      switch (action.type) {
        case "data/updateDataList": {
          const list = action.payload;

          // storing total
          let count = 0;
          list.forEach((item) => (count = count + Number(item.value)));
          dispatch(updateDataTotal(count));

          // storing graph data as a dictionary
          const obj = {};
          list.forEach(
            (item, i) =>
              (obj[item.name] = {
                value: Number(item.value),
                percent: Number(
                  ((Number(item.value) / count) * 100).toFixed(2)
                ),
                color: colors[i],
              })
          );
          dispatch(updateDataObj(obj));
        }
      }
    }
  };
