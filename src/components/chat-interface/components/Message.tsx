import styled from "@emotion/styled"
import React from "react"
import { colors } from "../../../utils/style-constants";

interface MessageProps {
    
}

const Container = styled.div(() => ({
    height: 80,
    padding: 10,
    display: 'flex',
    alignItems: 'center',
    columnGap: 24
}));

const TextArea = styled.textarea(() => ({
    height: 60,
    flex: 1,
    resize: 'none',
    boxSizing: 'border-box',
    border: 0
}));

export const Message: React.FC<MessageProps> = ({}) => {
    return (
        <Container>
            <TextArea autoFocus placeholder="Ask Something..."/>            
        </Container>
    )
}