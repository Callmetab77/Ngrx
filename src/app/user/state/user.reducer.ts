import { createAction, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { User } from "../user";

export interface UserState {
    maskUserName: boolean,
    currentUser: User,
}

const initialState = {
    maskUserName: false,
    currentUser: null
}

export const userReducer = createReducer<UserState>(
    initialState,
    on(createAction('[User] Toggle Mask Username'), (state):UserState => {
        return {
            ...state,
            maskUserName: !state.maskUserName
        }
    })
);

//SELECTOR

const getUserFeatureState = createFeatureSelector<UserState>('users');

export const getMaskUserName = createSelector(
    getUserFeatureState,
    state => state.maskUserName
)