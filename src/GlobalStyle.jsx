import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box; 
    margin-top:.5rem; 
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
hr{
    background-color: dark black;
    border: 1px solid #0000005d;
}
html{
    font-size:62.5%;
    overflow-x:hidden;

}
body{
    overflow-x: hidden;
}
::-webkit-scrollbar{
    width:1.5rem;
}
::-webkit-scrollbar-track{
    background-color: white;
}
::-webkit-scrollbar-thumb{
    background: #a6d7f6;
    border: 5px solid transparent;
    border-radius: 9px;
    background-clip: content-box;
}
h1{
    color:black;
    font-size:6rem;
    font-weight:900;
}
h2{
    color:Black;
    font-size:4.4rem;
    text-align: normal;
    font-weight:300;
    margin-left: 2rem;
}
h3{
    font-size:1.8rem;
    font-weight:400;
}
p{
    color: ${({theme})=> theme.colors.text};
    opacity:0.7;
    font-size:1.75rem;
    margin-top: 1rem;
    font-weight:400;

}
a{
    text-decoration: none;
}
li{
    list-style:none;
}
.container{
    max-width: 120rem;
    margin: 0 auto;
}
.grid{
    display: grid;
    gap: 9rem;

}
.grid-two-column{
    grid-template-columns: repeat(2, 1fr);
}

.grid-three-column{
    grid-template-columns: repeat(3,1fr);
}
.grid-four-column{
    grid-template-columns: 1fr 1.2fr .5fr .8fr;
}
.reset{
    padding: 2rem 1rem;
    position: absolute;
    top: 3%;
    left: 90%;
    @media print{
        display: none;
    }
}
.common-heading{
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: 400;
    margin-bottom: 4rem;
   
}
.main{
    background-color: #ffffff;
    border: 1px solid black;
    height: 96.6rem;
    margin-left: .3rem;
    margin-bottom: 2rem;
    
}
.printbutton{
    font-size: 2em;
    padding: 2rem 4rem;
    margin-top: 5rem;
    margin-left: 75rem;
  }
input , textarea{
    max-width: 50rem;
    color: ${({theme})=> theme.colors.black};
    
    border-bottom:1px solid black;
    
}
input[type="submit"]{
    max-width: 16rem;
    margin-top: 2rem;
    background-color: ${({theme})=> theme.colors.btn};
    color: ${({theme})=> theme.colors.white};
    padding: 1.4rem 2.2rem;
    border-style: solid;
    border-width: 1rem;
    text-transform: uppercase;
    font-size: 1.8rem;
    cursor: pointer;
}


`;
// const InputDiv = styled.div`
//   padding: 5px;
//   margin-right: 10px;
//   border: 1px solid #e21515;
// `;
