import styled from "@emotion/styled"
import React from "react"

interface MessageBubbleProps {
    
}

const Container = styled.div(() => ({
    width: '80%',
    backgroundColor: '#fff',
    padding: 5,    
    borderRadius: 10
}))

export const MessageBubble: React.FC<MessageBubbleProps> = ({}) => {
    return (
        <Container>
            <p>This is a test message This is a test message This is a test message This is a test message This is a test message</p>
        </Container>
    )
}