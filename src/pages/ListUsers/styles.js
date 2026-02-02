import styled from 'styled-components'

export const Container = styled.div`
    background-color: #181f36;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 20px;
`

export const Title = styled.h2`
    color: #fff;
    text-align: center;
    font-size: 38px;
    font-style: normal;
    font-weight: 600;
    margin-top: 30px;
`

export const ContainerUsers = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin: 40px 0;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

export const CardUsers = styled.div`
    background-color: #252d48;
    padding: 16px;
    border-radius: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    max-width: 380px;
    transition: all 0.3s;

    &:hover {
        border-radius: 60px 30px 30px 60px;
    }

    h3 {
        color: #fff;
        font-size: 24px;
        margin-bottom: 3px;
        text-transform: capitalize;
    }

    p {
        color: #fff;
        font-size: 14px;
        font-weight: 200;
    }
`

export const TrashIcon = styled.img`
    cursor: pointer;
    padding-left: 32px;
    transition: all 0.3s;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.6;
        transform: scale(0.95);
    }
`

export const AvatarUser = styled.img`
    height: 80px;
    opacity: 0.8;
    transition: all 0.3s;

    &:hover {
        opacity: 1;
    }
`