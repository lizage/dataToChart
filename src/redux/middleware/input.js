import { updateDataList, updateDataTotal } from "../data/dataSlice";
import {
  updateTitle,
  updateSubTitle,
  updateChartTitle,
} from "../titles/titlesSlice";
import { updateErrorMsg } from "../errorMsg/errorMsgSlice";
import { colors } from "../../resource";

export const inputMiddleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action);

    switch (action.type) {
      case "input/updateInput":
        if (action.payload && Object.values(action.payload).length > 0) {
          const formatter = Intl.NumberFormat("en", {
            notation: "compact",
            maximumSignificantDigits: 3,
          });

          const input = action.payload;

          dispatch(updateTitle(input.title));
          dispatch(updateSubTitle(input.subTitle));
          dispatch(updateChartTitle(input.chartTitle));

          // calculating total
          let count = 0;
          input.data.forEach((item) => (count = count + Number(item.value)));
          dispatch(updateDataTotal(formatter.format(count)));

          // data list building: sorting, adding value as percent, formatting currency, adding color
          const list = input.data
            .map((item) => {
              return {
                ...item,
                value: Number(item.value),
              };
            })
            .sort((a, b) => {
              return a.value > b.value ? -1 : 1;
            })
            .map((item, i) => {
              return {
                ...item,
                percent: `${((item.value / count) * 100).toFixed(2)}%`,
                value: formatter.format(item.value),
                color: colors[i],
              };
            });

          dispatch(updateDataList(list));
        } else {
          dispatch(updateErrorMsg("No data"));
        }

        break;
      default:
        return;
    }
  };
