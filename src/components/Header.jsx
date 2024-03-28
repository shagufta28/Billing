import React from 'react'
import styled from 'styled-components'
import Info from './Info'

const Header = () => {
  return (
    <>
    <Wrapper>
        <div className="main-container">
            <h1>Tax Invoice</h1>
            <div className=" container grid grid-two-column">
              <div className="heading">

                <h2>Suhana Foam Industries</h2>
                <p>Pillar No:22 , shop no. 1 ,Sudes Market, Sector-49, <br />   
                &nbsp;  Barola, Noida , Distt - Gautam budh nagar, UP <br /> &nbsp; &nbsp;   &nbsp;   &nbsp;   &nbsp;     &nbsp; Phone Number: 9599172928
    <br />  &nbsp;&nbsp;   &nbsp;   &nbsp;    <b>GSTIN: 09BGWPK9999M1ZP</b></p>
              </div>
                  <div>
                    
                <img src="public\logo.png" alt="" className='image' />
                  </div>
            </div>
            <hr />
        </div>
        
    </Wrapper>
    <Info/>
    </>
  )
}

const Wrapper = styled.section`
  
.main-container{
  height: 100%;
  width: 100%;
  
  
  .image{
    max-width: 100%;
    height: 13rem;
      

    }
    h1{
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 5rem;
    }
    

}
@media print{
  h2{
    font-size: 2.8rem;
    letter-spacing: 0.1rem;
  }
  p{
    margin-left: 2.3rem;
    font-size: 1.3rem;
  }
  button{
    display: none;
  }
  
  .main-container{
     h1{
      font-size: 3rem;
     }
    .image{
      max-width: 100%;
      height: 9rem;
      margin-left: 8rem;
    }
  }
}
`;
export default Header