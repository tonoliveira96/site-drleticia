import { createGlobalStyle } from 'styled-components';
// import Banner01 from '../assets/massage2.jpg';
export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    outline: 0;
    box-sizing: border-box;
  }

  body{
    background: #f0f0f5 /*url({Banner01}) */no-repeat center top fixed;
    -webkit-font-smoothing: antialiased;
  }

  body, input , button {
    font: 16px Roboto, sans-serif;

    #root{
    flex:1;

    div h2{
      width: 100%;
      text-align: center;
      padding: 10px 0;
    }

  }



  }


  button{
    cursor: pointer;
  }
`;
