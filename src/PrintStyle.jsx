import { createGlobalStyle } from "styled-components";

export const PrintStyle = createGlobalStyle`
@media print {
    .main-container{
        width: 20rem;
    }
    
}
`;