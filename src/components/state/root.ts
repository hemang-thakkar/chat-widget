import { Reducer } from "react"
import { BehaviorAction, BehaviorState, defaultBehaviorState } from "./reducers/BehaviorReducer"

export interface RootState {
    behavior: BehaviorState
}


export const defaultRootState = ():RootState => {
    return {
        behavior: defaultBehaviorState()
    }
}