import React from 'react';
import styled from 'styled-components';
import Terms from './Terms';

const TotalInWords = ({ totalWithGST }) => {
  // Function to convert number into words
  const numberToWords = (num) => {
    const words = [
      '', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten',
      'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'
    ];

    const tensWords = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

    const inWords = (number) => {
      if (number === 0) return '';
      let word = '';
      if (number < 20) {
        word = words[number];
      } else {
        word = tensWords[Math.floor(number / 10)] + ' ' + words[number % 10];
      }
      return word.trim();
    };

    if (totalWithGST === 0) return 'Zero';

    let crore = Math.floor(totalWithGST / 10000000);
    let lakh = Math.floor((totalWithGST % 10000000) / 100000);
    let thousand = Math.floor((totalWithGST % 100000) / 1000);
    let hundreds = Math.floor((totalWithGST % 1000) / 100);
    let tens = Math.floor((totalWithGST % 100) / 10);
    let ones = Math.floor(totalWithGST % 10);

    let result = '';

    if (crore > 0) {
      result += inWords(crore) + ' Crore ';
    }
    if (lakh > 0) {
      result += inWords(lakh) + ' Lakh ';
    }
    if (thousand > 0) {
      result += inWords(thousand) + ' Thousand ';
    }
    if (hundreds > 0) {
      result += inWords(hundreds) + ' Hundred ';
    }
    if (tens > 0 || ones > 0) {
      if (tens < 2) {
        result += inWords(tens * 10 + ones);
      } else {
        result += inWords(tens * 10) + ' ' + inWords(ones);
      }
    }

    return result.trim();
  };

  return (
    <Wrapper>

    <div className='num-to-words'>
    <Table>
    <tbody>
          <TableRow>
            <td className='total'>Total (in words):</td>
            <td className='zero'>{numberToWords(totalWithGST)}</td>
          </TableRow>
    </tbody>
    </Table>
      {/* <strong>Total (in words): &nbsp; &nbsp;  </strong>
     <strong> &nbsp; {numberToWords(totalWithGST)} </strong> */}
    </div>
    <Terms/>
    </Wrapper>
  );
};
const TableRow = styled.tr`

  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const Wrapper = styled.div`
    
  margin-top: -4.5rem;
  font-size: 2rem;
.num-to-words{
    width: 86rem;
    
    font-size: 2rem;
   td{
    border: 1px solid #ddd;
  padding: 8px;
   }
   
    
    
}
.total{
    width: 12rem;
}
.zero{
    width: 50rem;
}

@media print{
    .num-to-words{
        height: 3rem;
        font-size: 1rem;
        font-weight: 200;
        position: fixed;
        bottom: 18.5rem;
        width: 41.5rem;
    }
}
`;
const Table = styled.table`
  border-collapse: collapse;
  width: 100%; /* Set the width to 50% to occupy half of the page width */
  
  
  @media print {
    
    width: 50%; 
   
  }
`;
export default TotalInWords;
