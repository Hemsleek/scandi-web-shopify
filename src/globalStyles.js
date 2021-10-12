import {createGlobalStyle} from 'styled-components'

const GlobalStyles= createGlobalStyle`
    :root{
        font-size: 16px;
    }
    html,
    body{
        box-sizing: border-box;
    }
    
    body{
        margin:0;
        padding:0;
        background-color: #fff;
    }
    

`

export default GlobalStyles