import styled from "styled-components"

export const Footer = styled.footer`
    margin: 0 auto;
    margin-top: 10px;
    padding: 10px;
    border-radius: 10px;
    color: var(--java-100);
    background-color: var(--java-600);
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    font-size: 13px;

    @media (min-width: 900px) {
        max-width: 900px;
    }
`