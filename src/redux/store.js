import { createStore,applyMiddleware } from "redux";
import cakeReducer from "./cakes/cakeReducer";
import rootReducer from "./rootReducer";
import logger from "redux-logger";
// const store=createStore(cakeReducer)
const store=createStore(rootReducer,applyMiddleware(logger))


export default store;
