import { updateDataList, updateDataTotal } from "../data/dataSlice";
import {
  updateTitle,
  updateSubTitle,
  updateChartTitle,
} from "../titles/titlesSlice";
import { colors } from "../../resource";

export const dataMiddleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action);

    if (action.payload) {
      switch (action.type) {
        case "input/updateInput":
          {
            const input = action.payload;
            dispatch(updateTitle(input.title));
            dispatch(updateSubTitle(input.subTitle));
            dispatch(updateChartTitle(input.chartTitle));

            // calculating total
            let count = 0;
            input.data.forEach((item) => (count = count + Number(item.value)));
            dispatch(updateDataTotal(count));

            // adding values to data list
            const list = input.data
              .map((item, i) => {
                return {
                  ...item,
                  value: Number(item.value),
                  percent: `${((Number(item.value) / count) * 100).toFixed(
                    2
                  )}%`,
                  color: colors[i],
                };
              })
              .sort((a, b) => {
                return a.value > b.value ? -1 : 1;
              });

            dispatch(updateDataList(list));
          }
          break;
        default:
          return;
      }
    }
  };
