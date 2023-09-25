import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {--gradianteazul: background: linear-gradient(0deg, rgba(8,25,60,1) 0%, rgba(24,26,39,1) 100%);
            --orange:#f15a59;}
            
    body{ margin:0;
          background: rgb(8,25,60);
          background: linear-gradient(0deg, rgba(8,25,60,1) 0%, rgba(24,26,39,1) 100%);

          font-family:Verdana;

          }
        a{

        text-decoration:none;
        color:white;


        /* &:hover{ box-shadow: -1px 1px 56px 0px rgba(243, 243, 243, 0.75);}*/
          } 
`;
