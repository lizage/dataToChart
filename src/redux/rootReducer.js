import { combineReducers } from '@reduxjs/toolkit'
import titlesReducer from './titles/titlesSlice'
import dataReducer from './data/dataSlice'

const appReducer = combineReducers({
  titles: titlesReducer,
  data: dataReducer,
})

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default rootReducer
