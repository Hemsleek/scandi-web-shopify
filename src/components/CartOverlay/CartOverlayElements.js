import styled from 'styled-components'

export const CartOverlayWrapper = styled.div`
    width:100%;
    height:100%;
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