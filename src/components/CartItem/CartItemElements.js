import styled from 'styled-components'


export const CartItemwrapper = styled.div`
    margin-bottom:2.5rem;

`

export const TotalCost = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 3.18rem;
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