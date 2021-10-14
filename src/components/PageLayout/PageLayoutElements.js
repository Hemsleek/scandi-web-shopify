import styled,{css} from "styled-components";


export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    overflow-y: hidden;

    ${props => props.cartOpen && css`
        height:100%;
    `}
`

export const Content = styled.div`
    position:relative;
    flex-grow: 1;
    padding:5rem 6.31rem 0 7.31rem;
    overflow-y:auto;
    
`