import React from 'react';
import ChatIcon from '../../../assets/svg/chat-round.svg';
import styled from '@emotion/styled';
import { colors } from '../../utils/style-constants';

interface WidgetActivationButtonProps extends React.InputHTMLAttributes<HTMLButtonElement> {
    onClick: () => void
}

const Button = styled.button(() => ({
    padding: 10,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.blue,
    border: 0,
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
}));

export const WidgetActivationButton: React.FC<WidgetActivationButtonProps> = ({onClick}) => {
    return (
        <Button type='button' onClick={onClick}><ChatIcon/></Button>
    );
}