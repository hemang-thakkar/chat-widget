import styled from "@emotion/styled";
import React from "react";
import { colors } from "../../../utils/style-constants";
import CrossIcon from "../../../../assets/svg/cross.svg";

interface HeaderProps {

}

const Container = styled.div(() => ({    
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.blue,
    color: '#fff'    
}));

const Title = styled.h4(() => ({}));

const ActionButtons = styled.div(() => ({}));

const IconButton = styled.button(() => ({
    border: 0,
    color: '#fff',
    background: 'transparent'
}));

export const Header:React.FC<HeaderProps> = () => {
    return (
        <Container>
            <Title>Cresta</Title>
            <ActionButtons>
                <IconButton type="button"><CrossIcon/></IconButton>
            </ActionButtons>
        </Container>
    );
}