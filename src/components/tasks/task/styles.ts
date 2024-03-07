import styled from "styled-components"

export const TaskCardContainer = styled.div`
    background-color: var(--java-500);
    margin: 10px auto;
    width: 80%;
    padding: 5px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`

export const TaskTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Title = styled.h3`
    color: var(--java-950);
    font-weight: 500;
    text-transform: capitalize;
`

export const Categories = styled.div`
    margin: 5px 0;
`
export const Span = styled.span`
    background-color: var(--java-50);
    margin-right: 5px;
    padding: 3px;
    border-radius: 3px;
    color: var(--java-800);
    font-size: 14px;
    font-weight: 500;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 1px, rgba(6, 24, 44, 0.65) 0px 3px 5px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
`

export const Buttons = styled.div`
    display: flex;
    justify-content: end;
`

export const Button = styled.button`
    cursor: pointer;
    border: none;
    padding: 2px;
    margin-left: 5px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
    &:hover {
        background-color: var(--java-50);
    }
    &:active {
        background-color: var(--java-100);
    }
`

export const ButtonStar = styled.button`
    cursor: pointer;
    border: 2px solid var(--java-500);
    padding: 2px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 50%;
    background-color: transparent;
    transition: 0.2s ease;
    &:hover {
        background-color: var(--java-50);
    }
    &:active {
        border: 2px solid var(--yellow);
        background-color: var(--java-100);
    }
`