import styled from "styled-components"

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 610px) {
        margin: 0 auto;
        max-width: 570px;
    }
`

export const DivSearch = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: var(--java-50);
    border-radius: 5px;
    margin-bottom: 15px;

    @media screen and (min-width: 610px) {
        max-width: 570px;
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

    @media screen and (min-width: 610px) {
        max-width: 570px;
    }
`

export const Label = styled.label`
    width: 195px;
    font-size: 14px;
    display: flex;
    align-items: center;
    padding-left: 10px;
`

export const DivSelector = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

export const InputFavorite = styled.input`
    display: none;
`

export const LabelFavorite = styled.label`
    position: relative;
    background-color: var(--java-50);
    border-radius: 4px;
    padding: 5px;
    display: flex;
    align-items: center;
    padding-left: 30px;
    font-size: 14px;
    margin-top: 15px;
    height: 38px;
    cursor: pointer;

    &&::before {
        position: absolute;
        content: "";
        height: 15px;
        width: 15px;
        border: 1px solid var(--java-600);
        border-radius: 50%;
        left: 5px;
        background-image: url('../../src/assets/estrela.png');
        background-repeat: no-repeat;
    }

    ${InputFavorite}:checked + &::before {
        background-color: var(--java-600);
        border: 1px solid var(--java-900);
    }
`