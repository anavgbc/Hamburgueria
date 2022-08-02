import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --color-background: #FFFFFF;
    --color-primary: #27AE60;
    --color-primary-50: #93D7AF;
    --color-secondary: #EB5757;
    --gray-100: #333333;
    --gray-50: #828282;
    --gray-20: #E0E0E0;
    --gray-0: #F5F5F5;
    --gray-remove: #BDBDBD

/* Feedback Palette */ 

    --color-negative: #E60000;
    --color-warning: #FFCD07;
    --color-sucess: #168821;
    --color-information: #155BCB;
  }
  
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }
  body,html{
    width: 100vw;
    height: 100vh;
    font-size: 1rem;
  }
  
  body, input, button, textarea {
    font-family: "Inter", sans-serif;
    overflow-x: hidden;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
  button {
    cursor: pointer;
  }
  /* width */
  ::-webkit-scrollbar {
    width: 5px;
    height: 40%;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: var(--color-primary);  
      margin: 1rem;
    border-radius: 1.6rem;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--color-primary-dark);
    border-radius: 1.6rem;
  }
`;
