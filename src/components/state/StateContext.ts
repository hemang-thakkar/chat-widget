import React, { Dispatch, ReducerAction } from "react";
import { RootState, defaultRootState } from "./root";
import { BehaviorState } from "./reducers/BehaviorReducer";

export const StateContext = React.createContext<BehaviorState|null>(null);
export const DispatchContext = React.createContext<any>(null);


export function createStateContext<A = BehaviorState | null>() {
    const ctxt = React.createContext<A | undefined>(undefined);

    const useContext = () => {
        const c = React.useContext(ctxt);
        if (c === undefined) {
          throw new Error('useContext must be inside a Provider with a value');
        }
    
        return c;
    };

    
}