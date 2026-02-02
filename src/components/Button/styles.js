import styled from 'styled-components'

export const Button = styled.button`
    border: ${props =>
        props.theme === 'primary'
        ? 'none'
        : 'solid 1px #fff'};
    background: ${props =>
        props.theme === 'primary'
        ? 'linear-gradient(180deg, #fe7e5d 0%, #ff6378 100%)'
        : 'transparent'};
    font-size: 16px;
    color: #fff;
    padding: 16px 32px;
    width: fit-content;
    cursor: pointer;
    border-radius: 30px;
    transition: all 0.3s;

    &:hover {
        opacity: ${props => props.theme === 'primary' ? '0.8' : 'none'};
        transform: ${props => props.theme === 'primary' ? 'translateY(3px)' : 'none'};
        background: ${props => props.theme === 'primary' ? 'linear-gradient(180deg, #fe7e5d 0%, #ff6378 100%)' : '#fff'};
        color: ${props => props.theme === 'primary' ? '#fff' : '#181f36'}
    }

    &:active {
        opacity: 0.6;
    }
`