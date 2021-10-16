import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const CartOverlayWrapper = styled.div`
    width:100%;
    height:100vh;
    background: rgba(57, 55, 72, 0.22);
    z-index:100;
    position:absolute;
    top:0;
    left:0;
`

export const MiniCart = styled.div`
    position:absolute;
    right:5.4rem ;
    width:20.31rem;
    background-color: #fff;
    padding:0.5rem 1rem  1.25rem 1rem;
`

export const Title = styled.div`

`

export const BoldText = styled.span`
    font-weight:700;
`
export const SmallText = styled(BoldText)`
    font-weight:500;
`

export const CartItemWrapper = styled.div`
    margin-top:1.56rem;
    display:flex;
    flex-direction: column;
`


export const TotalCost = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom:2.18rem;
`

export const CostLabel = styled.span`
    font-weight:500;
`

export const CostValue = styled.span`
    font-weight:700;
`

export const ActionButtons = styled.div`
    /* font-weight:700; */
    display:flex;
    align-items: center;
    column-gap:0.75rem ;
`
export const ViewBag = styled.button`
    font-weight:600;
    flex-grow: 1;
    font-size:0.875rem;
    color: #1D1F22;
    border: 1px solid #1D1F22;
    background:#fff;
    outline: none;
    padding:0.81rem 0;
`
export const CheckOut = styled.button`
    font-weight:600;
    font-size:0.875rem;
    flex-grow: 1;
    padding:0.81rem 0;
    border: none;
    color:#fff;
    outline: none;
    background-color: #5ECE7B;

`

export const LinkToCart = styled(Link)`
    display:flex;
    flex-grow:1;
    text-decoration:none;
    color: #1D1F22;


`