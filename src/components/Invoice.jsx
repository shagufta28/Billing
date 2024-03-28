import React, { useState } from 'react';
import styled from 'styled-components';
import TaxComponent from './TaxComponent';
import TotalInWords from './TotalInWords';

const Wrapper = styled.div`
  margin: 0px;
  @media print{
    hr{
      border: 1px solid #00000056;
      margin-top: 1rem;
    }
  }
  
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  @media print{
    display: none;
  }
`;

const InputDiv = styled.div`
  padding: 5px;
  margin-right: 10px;
  border: 1px solid #ccc;
`;

const InputField = styled.input`
  padding: 5px;
`;

const AddButton = styled.button`
  padding: 5px 100px;
`;

const InvoiceTable = styled.table`
  width: 800px;
  border-collapse: collapse;

  @media print{
    td:nth-child(2) {
      width: 50%;
    
    }
   
    td:nth-last-child(1),
    th:nth-last-child(1) {
      display: none;
    }
  
    margin-top  :-0.1rem ;
  
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
`;

const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

const DeleteButton = styled.button`
  padding: 5px 10px;
  background-color: #ff0000;
  color: #ffffff;
  border: none;
  cursor: pointer;
  @media print{
    display: none;
  }
`;
const Line = styled.tr`
  border-top: 1px solid #000000;
`;
const MaxItems = 17;
const Invoice = () => {
  const [items, setItems] = useState([]);
  const [serialNumber, setSerialNumber] = useState(1);
  const [sno, setSno] = useState('');
  const [itemName, setItemName] = useState('');
  const [hsnCode, setHsnCode] = useState('');
  const [quantity, setQuantity] = useState('');
  const [rate, setRate] = useState('');
  const [totalWithoutGST, setTotalWithoutGST] = useState(0);
  const [cgst, setCgst] = useState(0); // State to store CGST
  const [sgst, setSgst] = useState(0); 

  const handleAddItem = () => {
    if (items.length >= MaxItems) {
      alert(`You can't add more than ${MaxItems} items.`);
      return;
    }

    const newItem = {
      sno: serialNumber,
      itemName,
      hsnCode,
      quantity: parseFloat(quantity),
      rate: parseFloat(rate),
      total: parseFloat(quantity) * parseFloat(rate),
    };

    setItems([...items, newItem]);
    setSerialNumber(serialNumber + 1);
    setSno('');
    setItemName('');
    setHsnCode('');
    setQuantity('');
    setRate('');
    setTotalWithoutGST(prevTotalWithoutGST => prevTotalWithoutGST + newItem.total);
    setCgst(prevCgst => prevCgst + (newItem.total * 0.09)); // Update CGST
    setSgst(prevSgst => prevSgst + (newItem.total * 0.09));
  };

  const handleDeleteItem = (index) => {
    const deletedItem = items[index];
    setItems(items.filter((item, i) => i !== index));
    setTotalWithoutGST(prevTotalWithoutGST => prevTotalWithoutGST - deletedItem.total); // Update total without GST
    const gstAmount = newItem.total * 0.18; // Assuming GST rate is 18%
setCgst(prevCgst => prevCgst + (gstAmount / 2)); // Update CGST
setSgst(prevSgst => prevSgst + (gstAmount / 2));
  };
  const totalWithGST = totalWithoutGST + cgst + sgst;
  return (
    <Wrapper>
      <hr />
    <InputContainer>
      
      <InputDiv>
        <InputField
          type="text"
          placeholder="Item Name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
      </InputDiv>
      <InputDiv>
        <InputField
          type="text"
          placeholder="HSN Code"
          value={hsnCode}
          onChange={(e) => setHsnCode(e.target.value)}
        />
      </InputDiv>
      <InputDiv>
        <InputField
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </InputDiv>
      <InputDiv>
        <InputField
          type="number"
          placeholder="Rate"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        />
      </InputDiv>
      <AddButton onClick={handleAddItem}>Add</AddButton>
    </InputContainer>

    <InvoiceTable>
      <thead>
        <tr>
          <TableHeader>S.No</TableHeader>
          <TableHeader>Item Name</TableHeader>
          <TableHeader>HSN Code</TableHeader>
          <TableHeader>Quantity</TableHeader>
          <TableHeader>Rate</TableHeader>
          <TableHeader>Total</TableHeader>
          <TableHeader>Action</TableHeader>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <TableRow>
              <TableCell>{item.sno}</TableCell>
              <TableCell>{item.itemName}</TableCell>
              <TableCell>{item.hsnCode}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell>{item.rate}</TableCell>
              <TableCell>{item.total}</TableCell>
              <TableCell>
                <DeleteButton onClick={() => handleDeleteItem(index)}>Delete</DeleteButton>
              </TableCell>
            </TableRow>
            {index === MaxItems - 1 && <Line />}

          </React.Fragment>
        ))}
      </tbody>
    </InvoiceTable>
    
      <TaxComponent 
        totalWithoutGST={totalWithoutGST} 
        cgst={cgst} 
        sgst={sgst} 
        totalWithGST={totalWithGST} // Pass the total with GST to TaxComponent
      />
  <TotalInWords totalWithGST={totalWithGST} />
  </Wrapper>
);
};

export default Invoice;
