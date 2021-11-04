import styled, { css } from 'styled-components'

export const CartItemContainer = styled.div`
    margin-bottom:2.5rem;
    max-height:13rem;
    height:13rem;
    overflow-y:hidden;
    display:flex;
    align-items: center;
    justify-content:space-between;

    ${props => props.large && css`
        border-top:1px solid #E5E5E5;
        padding-top:1.25rem;
    `}

`

export const CardDetails = styled.div`
    font-weight:300;
    max-height: 100%;
    flex-grow:1;
    display:flex;
    flex-direction: column;
    overflow-y:auto;

    ${props => props.large && css`
        font-size:1.875rem;
    `}

`
export const ItemName = styled.span`
    ${props => props.large && css`
        font-weight:600;
    `}
`
export const ItemDesc = styled.span`
    margin:0.3rem 0;
`


export const ItemPrice = styled.span`
    font-weight:500;
    margin-top:0.75rem;

    ${props => props.large && css`
        font-size:1.5rem;
        font-weight:700;

    `}

`
export const Sizes = styled.div`
    display:flex;
    align-items:center;
    margin-top:1.687rem;
    column-gap: 0.5rem;

    ${props => props.large && css`
        margin-top:1.2rem;
        
    `}
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
    user-select:none;
    text-align:center;


    ${props => props.large && css`
        height:2.81rem;
        width:3.93rem;
    `}

    ${props => props.active && css`
        background-color:#1D1F22;
        color:#fff;

    `}

    ${props => props.swatchActive && css`
        border: 3px solid #5ECE7B;
        

    `}

`
export const SizeM = styled(Size)`
  border: 1px solid #A6A6A6;  
  background: rgba(166, 166, 166, 0.2);
  color:#A6A6A6;

  ${props => props.large && css`
    color:#fff;
    background: #1D1F22;
    `}
  
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
    user-select:none;

    ${props => props.large && css`
        height:2.81rem;
        width:2.81rem;
    `}
    
`
export const ItemQuantity = styled.span`
    text-align:center;
    font-weight:500;
`
export const MinusButton = styled(Size)`
    font-size:1.5rem;
    user-select:none;

    ${props => props.large && css`
        width:2.81rem;
        height:2.81rem;

    `}

`
export const ItemDisplay = styled.div`
    position:relative;
    width:8.81rem;
    height:11.56rem;
    
    &:hover{
        img[alt='chevron-arrow']{
            display:inline;
        }
    }
`
export const ItemImage = styled.img`
    --o-object-fit:contain;
    object-fit:contain;
    width:100%;
    height:100%;
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

