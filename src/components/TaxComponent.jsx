import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0px;
  display: flex;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 50%; /* Set the width to 50% to occupy half of the page width */
  
  @media print {
    
    width: 50%; 
    
   
  }
`;

const TableHeader = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
  &:nth-child(4) {
    border: 2px solid black;
  }
  
`;
const TaxComponentWrapper = styled.div`
  width: 41%;
  margin-left: 86rem;
  margin-top: -0.4rem;
  font-size: 2rem;
 
  @media print{
    margin-left: 41.6rem;
    font-size: 1rem;
    
    position: fixed;
    bottom: 9.6rem;
    
  }
`;

const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

const TaxComponent = ({ totalWithoutGST, cgst, sgst, totalWithGST }) => {
  return (<>
    <TaxComponentWrapper>
    <Wrapper>
      <Table>
        
        <tbody>
          <TableRow>
            <TableCell>Sub Total</TableCell>
            <TableCell>{totalWithoutGST}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>CGST (9%)</TableCell>
            <TableCell>{cgst}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>SGST (9%)</TableCell>
            <TableCell>{sgst}</TableCell>
          </TableRow>
          <TableRow className='grand-total'>
            <TableCell> <b>Grand Total</b></TableCell>
            <TableCell><b>{totalWithGST}</b></TableCell>
          </TableRow>
          
        </tbody>
      </Table>
    </Wrapper>
    </TaxComponentWrapper>
  </>
  );
};


export default TaxComponent;
