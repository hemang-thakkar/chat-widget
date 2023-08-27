import React from "react";
import { Widget } from "./components/widget/Widget";
import { behaviorReducer, defaultBehaviorState } from "./components/state/reducers/BehaviorReducer";
import { DispatchContext, StateContext } from "./components/state/StateContext";

export const App: React.FC = () => {
    const [state, dispatch] = React.useReducer(behaviorReducer, defaultBehaviorState());
    
    return (
        <StateContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>
                <Widget/>
            </DispatchContext.Provider>
        </StateContext.Provider>
    );
}