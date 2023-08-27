import React from 'react';
import { WidgetActivationButton } from '../widget-activation-button/WidgetActivationButton';
import { ChatInterface } from '../chat-interface/ChatInterface';
import styled from '@emotion/styled';
import { DispatchContext, StateContext } from '../state/StateContext';

interface WidgetProps {

}

const Container = styled.div(() => ({
    display: 'flex',
    flexDirection: 'column',
    rowGap: 20,
    position: 'fixed',    
    bottom: 20,
    right: 20,
    width: 500,    
    alignItems: 'flex-end',
    zIndex: 9999
}))

export const Widget: React.FC<WidgetProps> = () => {
    const dispatch = React.useContext(DispatchContext);
    const state = React.useContext(StateContext);

    const onActivationButtonClick = () => dispatch({type: "TOGGLE_CHAT"});
    return (
        <Container>
            <ChatInterface/>
            <WidgetActivationButton onClick={() => {}}/>
        </Container>
    )
}