import styled from "@emotion/styled"
import React from "react"
import { colors } from "../../../utils/style-constants"
import { MessageBubble } from "./MessageBubble"

interface ConversationProps {

}

const Container = styled.div(() => ({    
    flex: '1 1 80%',
    overflow:'auto',
    backgroundColor: colors.beige,
    padding: 5,
    display:'flex',
    flexDirection: 'column',
    rowGap: 20        
}))

export const Conversation: React.FC<ConversationProps> = ({}) => {
    return (
        <Container>
            <MessageBubble/>
            <MessageBubble/>
            <MessageBubble/>
        </Container>
    )
}