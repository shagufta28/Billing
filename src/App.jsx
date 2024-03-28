import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./GlobalStyle"
import { PrintStyle } from './PrintStyle'


const App = () => {
  const theme = {
    colors:{
      heading: "rgb(24 24 29)",
      text: "rgb(24 24 29)",
      black: "black",
      white: "white",
      bg: "white",
      helper:"#ffffff",
      footer_bg:"#0a1435",
      btn:"rgb(235, 71, 71)",
      border: "rgb(235, 71, 71)",
      hr:"#ffffff",
      gradient:"linear-gradient(0deg, rgb(132 144 255) 0% , rgb(98 189 252)100%)",
      shadow:"rgbs(0,0,0,0.02) 0px 1px 3px 0px,rgba(27, 32, 35, 0.15)0px 0px 0px 1px ",
      shadowSupport:"rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media:{ mobile:"768px" , tab:"998px"},
  };
  return (
    <>

    <ThemeProvider theme={theme}>
     <PrintStyle/>
    <GlobalStyle/>

    <div className='main'>
    <Header/>
    <Footer/>
   
    </div>
    </ThemeProvider>
    
    </>
  )
}

export default App