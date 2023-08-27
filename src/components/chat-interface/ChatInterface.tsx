import styled from '@emotion/styled';
import React from 'react';
import { Header } from './components/Header';
import { Conversation } from './components/Conversation';
import { Message } from './components/Message';

interface ChatInterfaceProps {

}

const Container = styled.div(() => ({
    width: '100%',    
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 10,
    height: 500,
    overflow: 'hidden',
    flexGrow: 1,
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
}))

export const ChatInterface: React.FC<ChatInterfaceProps> = () => {
    return (
        <Container>
            <Header/>
            <Conversation/>
            <Message/>
        </Container>
    );
}