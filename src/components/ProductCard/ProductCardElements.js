import styled, { css } from "styled-components";

export const ProductWrapper = styled.div`
    padding:1rem;
    transition:0.2s all ease-in-out;
    
    ${props => props.outOfStock && css`
    opacity:0.5;
    `
    }
    ${props => !(props.outOfStock) && css`
        
    &:hover{
        background-color: #fff;
        box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);

        img[alt="green-cart"]{
            display:inline-flex;
        }
    }
        `
    }
`

export const PrdImgWrapper = styled.div`
    position: relative;
    width:100%;
    height:20.62rem;


    ${props => props.outOfStock && css`
    &::after{
        content:'OUT OF STOCK';
        top:0;
        color:#8D8F9A;
        font-size:1.5rem;
        position:absolute;
        z-index:200;
        width:100%;
        height:100%;
        display:flex;
        align-items: center;
        justify-content: center;
    }

    `}
`

export const Image = styled.img`
    -o-object-fit: contain;
    object-position: top;
    object-fit: contain;
    width:100%;
    height:100%;

`

export const CartImg = styled.img`
    display:none;
    position:absolute;
    z-index:100;
    bottom:-1.62rem;
    right:1.625rem;
    cursor: pointer;

`

export const PrdContent = styled.div`
    display:flex;
    flex-direction: column;
    margin-top:1.5rem;

`
export const Title = styled.span`
    font-weight: 300;
    font-size:1.12rem;

`

export const Price = styled(Title)`
    font-weight:500;
    margin-top:0.5rem;
`