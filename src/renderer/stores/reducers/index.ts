import { combineReducers } from "redux";

const counter = (state = { count: 0 }, action) => {
    switch (action.type) {
        case "increase":
            const { count } = state;
            return {
                count: count + 1,
            };
        default:
            return state;
    }
};

const mainMenuCollapsed = (state = { collapsed: false }, action) => {
    const { collapsed } = state;
    return {
        collapsed: !collapsed,
    };
};

export default combineReducers({ counter, mainMenuCollapsed });
