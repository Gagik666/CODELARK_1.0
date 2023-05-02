import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { categoryReducer } from "./reducers/categoryReducer/CategoryReducer";
import { taskReducer } from "./reducers/taskReducer/TaskReducer";

rootReducer = combineReducers({ category: categoryReducer, tasks: taskReducer })

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)

