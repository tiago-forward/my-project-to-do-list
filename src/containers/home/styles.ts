import styled from "styled-components"

export const Main = styled.main`
    background-color: var(--java-600);
    width: 100%;
    min-height: 10vh;
    margin: 0 auto;
    border-radius: 10px;
    padding: 10px;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    
    @media (min-width: 900px) {
        max-width: 900px;
    }
`
export const MainTitle = styled.h1`
    text-align: center;
    padding-bottom: 10px;
    text-transform: uppercase;
    color: var(--java-50);
    font-style: italic;
    font-weight: 800;
    
`