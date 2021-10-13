import styled from "styled-components";

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

`

export const SideActions = styled(NavTabs)`
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