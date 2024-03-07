import styled from "styled-components"

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`

export const DivSearch = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: var(--java-50);
    border-radius: 5px;
    margin-bottom: 15px;

    @media screen and (min-width: 720px) {
        margin-left: 400px;
    }
`

export const Input = styled.input`
    border: none;
    background-color: transparent;
    padding: 10px;
    width: 100%;
`

export const Button = styled.button`
    cursor: pointer;
    border: none;
    padding: 2px;
    margin-left: 5px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    background-color: var(--java-50);
    &:hover {
        background-color: var(--java-50);
    }
    &:active {
        background-color: var(--java-100);
    }
`

export const DivAddTask = styled.div`
    display: flex;
    background-color: var(--java-50);
    border-radius: 5px;

    @media screen and (min-width: 720px) {
        margin-right: 400px;
    }
`

export const Label = styled.label`
    width: 195px;
    font-size: 14px;
    display: flex;
    align-items: center;
    padding-left: 10px;
`