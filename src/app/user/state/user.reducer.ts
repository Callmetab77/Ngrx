import { createAction, createReducer, on } from "@ngrx/store";

export const userReducer = createReducer(
    {
        maskUserName: false
    },
    on(createAction('[User] Toggle Mask Username'), state => {
        return {
            ...state,
            maskUserName: !state.maskUserName
        }
    })
);