import { createReducer, on } from "@ngrx/store";
import { decrement, increment, reset } from "./items.action";

export const counterInitialState = 0;
export const counterReducer = createReducer(
    counterInitialState,
    on(increment, state => state + 1),
    on(decrement, state => state -1),
    on(reset, state => state = 0)
);