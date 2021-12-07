import styled, { css } from "styled-components"

export const PDWrapper = styled.div`
display:flex;


`

export const SmallSizes = styled.div`
    display:flex;
    flex-direction:column;
    margin-right:2.5rem;
`
export const PDSmallContainer = styled.span`
    width:4.937rem;
    height:5rem;
    margin-bottom:2.5rem;

    ${props => props.selected && css`
        
            border: 0.05px solid #5ECE7B;
            border-radius:1rem;
        
    `}
`

export const PDSmallImage = styled.img`
    width:100%;
    height:100%;
    object-fit:contain;

    
`
export const MainContainer = styled.div`
    display:flex;
    column-gap:6.25rem; 
`

export const PDBigImageWrapper = styled.div`
    width:38.12rem;
    height:28.93rem;
    transition:0.2s all ease-in-out;

    ${props => props.outOfStock && css`
        opacity:0.5;
        &::after{
            content:'OUT OF STOCK';
            top:0;
            color:#8D8F9A;
            font-size:1.5rem;
            position:absolute;
            z-index:200;
            width:38.12rem;
            height:28.93rem;
            display:flex;
            align-items: center;
            justify-content: center;
        }

    `}
   
`

export const PDBigImage = styled.img`  
    width:38.12rem;
    height:28.93rem;
    object-fit:contain;
    object-position:center;

`
export const PDDetails = styled.div`
    display:flex;
    flex-direction: column;
    max-height:28.93rem;
    overflow:auto;
    padding-right:1rem;

`
export const PDName = styled.span`
    font-weight:600;
    font-size:1.875rem;
`
export const PDDesc = styled(PDName)`
    font-weight:400;
    margin-top:1rem;
`
export const PDSizes = styled.div`
    margin-top:2.687rem;
`

export const PDLabel = styled.span`
    font-weight:700;
    font-size:1.125rem;
`
export const PDSizesWrapper = styled.div`
    display:flex;
    align-items:center;
    column-gap:0.75rem;
    margin-top:0.5rem;
`
export const PDSize = styled.div`
    width: 3.93rem;
    height:2.81rem;
    text-align:center;
    display:flex;
    align-items:center;
    justify-content:center;
    border: 1px solid #1D1F22;
    user-select:none;



    ${props => props.active && css`
        background-color:#1D1F22;
        color:#fff;

    `}

    ${props => props.swatchActive && css`
        border: 3px solid #5ECE7B;
        

    `}

    ${props => props.disabled && css`
        color:#A6A6A6;
        border: 1px solid #A6A6A6;
    `}
`

export const PDPrice = styled.div`
    display:flex;
    flex-direction:column;
    margin:2.5rem 0 1.56rem;
`
export const PDPriceLabel = styled.span`
   font-weight:700;
   font-size:  1.125rem;   
`
export const PDPriceValue = styled.span`
    font-weight:700;
   font-size:  1.5rem; 
   margin-top:0.825rem;
`
export const PDButton = styled.button`
    outline:none;
    border:none;
    color:#fff;
    background:#5ECE7B;
    padding:1rem 0;
    margin-bottom:2.5rem;
    width:18.3rem;

    ${props => !(props.outOfStock) && css`
        background-color: rgba(128,128,128,0.4);
        cursor: not-allowed;
    `}
`
export const PDInfo = styled.span`
    max-width:18.3rem;
`