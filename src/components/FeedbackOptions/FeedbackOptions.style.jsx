import styled from 'styled-components';

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
`

export const Button = styled.button`
    background-color: #ff00954d;
    padding: 10px;
    border: none;
    box-shadow: 3px 3px 5px #ff0095;
    cursor: pointer;

    &:hover{
        background-color: #ff0040a2;
        filter: blur(1px)
    }
`