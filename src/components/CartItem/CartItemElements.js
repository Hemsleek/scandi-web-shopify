import styled from 'styled-components'

export const CartItemContainer = styled.div`
    margin-bottom:2.5rem;
    display:flex;
    align-items: center;
    justify-content:space-between;

`
export const CardDetails = styled.div`
    font-weight:300;
    display:flex;
    flex-direction: column;

`
export const ItemName = styled.span`

`
export const ItemDesc = styled.span`
    margin:0.3rem 0;
`


export const ItemPrice = styled.span`
    font-weight:500;

`
export const Sizes = styled.div`
    display:flex;
    align-items:center;
    margin-top:1.687rem;
    column-gap: 0.5rem;
`
export const Size = styled.span`
    display:flex;
    align-items:center;
    justify-content:center;
    border: 1px solid #1D1F22;
    height:1.5rem;
    width:1.5rem;
    font-weight:400;
    font-size:0.875rem;
`
export const SizeM = styled(Size)`
  border: 1px solid #A6A6A6;  
  background: rgba(166, 166, 166, 0.2);
  color:#A6A6A6;
`
export const ItemDisplayContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    height:100%;

`
export const ItemQuantityWrapper = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:space-between;
    margin-right:0.6rem;
    align-self:stretch;
`
export const AddButton = styled(Size)`
    font-size:1.5rem;
    
`
export const ItemQuantity = styled.span`
    text-align:center;
    font-weight:500;
`
export const MinusButton = styled(Size)`
    font-size:1.5rem;
`
export const ItemDisplay = styled.div`
    position:relative;

    &:hover{
        img[alt='chevron-arrow']{
            display:inline;
        }
    }
`
export const ItemImage = styled.img`
    --o-object-fit:cover;
    object-fit:cover;
`
export const ChevronArrow = styled.img`
            position:absolute;
            display:none;
            cursor:pointer;
            z-index:800;
            top:calc(50% - 0.75rem);
            right:0;
`

export const ChevronArrowLeft = styled(ChevronArrow)`
    left:0;
    transform:rotate(180deg);
    transition:0.2s all ease-in-out;
`
