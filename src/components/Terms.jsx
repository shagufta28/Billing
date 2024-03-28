import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`

  
  display: none;
  /* Center the component horizontally */

  @media print {
    display: contents;
    
    margin-top: 90%;
    
    max-width: 50%;
    .terms{
        position: absolute;
        top: 85%;
        left: 3%;
    }
    h2{
        font-size: 1.2rem;
        
        

    }
    p{
        font-size: 1rem;
        margin-bottom: 0.5rem;
    }
  }
`;
const Sign = styled.div`
display: none;
@media print{
    display: contents;
}
h4{
   position: absolute;
   font-size: 2rem;
   color: red;
   left: 60%;
   top: 92%;
   font-size: 1.8rem;
}
h1{
    position: absolute;
    font-size: 1.2rem;
    
    left: 65%;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    @media print{
        top: 96%;

    }
  }
`;
const Terms = () => {
  return (
    <>
    <Wrapper>
        <div className="terms">

      <h2>Bank Details</h2>
      <p>
        Bank Name: Punjab National Banl<br />
        Account Number: 02161131001590<br />
        IFSC Code: 
      </p>
      <h2>Terms and Conditions</h2>
      <p>
        1. Goods once sold will not be accepted for return. <br />
        2. 24% interest will be charged if payment if not made by due date. <br />
        3. We are assessed on the account will be your account. <br />
        4. All jurisdiction subject to Noida court.
      </p>
        </div>
    </Wrapper>
      <Sign>
        <h4>Suhana Foam Industries</h4>
        <h1><b>Authorised Signatory</b></h1></Sign>
    </>
  );
};

export default Terms;
