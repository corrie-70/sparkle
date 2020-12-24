import { changeCollapsed, increase } from "../constants";

export const increaseAction = () => ({
    type: increase,
});

export const changeCollapsedAction = () => ({
    type: changeCollapsed,
});
