import styled, {css} from "styled-components";

export const NavBarContainer = styled.div`
    height:5rem;
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding:0 6.31rem 0 7.31rem;
    color:#1D1F22;

`

export const NavTabs = styled.div`
    display:flex;
    height:100%;
    align-items: center;
    column-gap:2rem;

    
`

export const Tab = styled.span`
    height:100%;
    display:flex;
    align-items:center;
    border-bottom:2px solid transparent;
    cursor:pointer;

    &.active{
        color:#5ECE7B;
        border-bottom-color:#5ECE7B;
        font-weight:600;
    }
`
export const Filter = styled.div`
    display:flex;
    align-items: center;
`

export const Cart = styled.div`
    display:flex;
    align-items: center;
    position:relative;
`

export const ImgWrapper = styled.img`

    ${props => props.rotate && css`
        transform: rotate(180deg);
    `}
`

export const SideActionsWrapper = styled.div`
    display:flex;
    align-self: flex-end;
    flex-direction: column;
    position:relative;
`

export const SideActions = styled.div`
    display:flex;
    align-items: center;
    column-gap:1.3rem;
`

export const Badges = styled.div`
    width:1.25rem;
    height:1.25rem;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:100%;
    background-color:#1D1F22;
    color:#fff;
    font-weight:700;
    font-size:0.87rem;
    font-family:'Roboto';
    position:absolute;
    right:-0.7rem;
    top:-0.7rem;
`

export const FilterOptions = styled.div`
    position:absolute;
    display:flex;
    flex-direction:column;
    bottom:-490%;
    left:0;
    background-color: #fff;
    width:100%;
    padding:1.25rem 0 0 1.25rem;
    font-size:1.125rem;
    font-weight:500;
    color:#1D1F22;
    box-shadow:0px 4px 35px rgba(168, 172, 176, 0.19);
`

export const Option = styled.span`
    cursor: pointer;
    margin-bottom:1.31rem;
`