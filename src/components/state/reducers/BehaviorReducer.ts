import { ReducerAction } from "react";

export interface BehaviorState {
    showChat: boolean
}

export type BehaviorAction = {type: "TOGGLE_CHAT"};

export const defaultBehaviorState = (): BehaviorState => {
    return {
        showChat: false
    }
}

export const behaviorReducer = (state: BehaviorState, action: BehaviorAction):BehaviorState => {
    switch(action.type) {
        case "TOGGLE_CHAT":
            return {
                ...state,
                showChat: !state.showChat
            };
        default:
            throw Error('Unknown action');
    }
}