import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Invoice from './Invoice';
import Cookies from 'js-cookie';

const Info = () => {
    const initialInvoiceNumber = parseInt(Cookies.get('invoiceNumber')) || 1;
    const [invoiceNumber, setInvoiceNumber] = useState(initialInvoiceNumber);

    useEffect(() => {
        // Update cookies whenever invoice number changes
        Cookies.set('invoiceNumber', invoiceNumber);
    }, [invoiceNumber]);

    function resetInvoiceNumber() {
        setInvoiceNumber(1);
        // Clear the cookie value
        Cookies.remove('invoiceNumber');
    }

    function handlePrintInvoice() {
        // Increment the invoice number by 1 when printing
        setInvoiceNumber(prevInvoiceNumber => prevInvoiceNumber + 1);
        // Print logic here
        window.print();
    }

    return (
        <Wrapper>
            <div className="container grid grid-two-column">
                <div className="info">
                    <table>
                        <tbody>
                            <tr>
                                <td><h2>Name :</h2></td>
                                <td><input type="text" /></td>
                            </tr>
                            <tr>
                                <td><h2>Address :</h2></td>
                                <td><TextArea type="text" /></td>
                            </tr>
                            <tr>
                                <td><h2>Party GSTIN :</h2></td>
                                <td><input type="text" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="num">
                    <table>
                        <tbody>
                            <tr>
                                <td><h2>Date : &nbsp;</h2></td>
                                <td><input type="date" /></td>
                            </tr>
                            <tr className='invoice'>
                                <td><h2>Invoice No : &nbsp;</h2></td>
                                <td><input type="number" value={invoiceNumber} readOnly /></td>
                            </tr>
                            <tr className='vehical'>
                                <td><h2>Vehicle Number :</h2></td>
                                <td><input type="text" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <Invoice invoiceNumber={invoiceNumber} />
            <button onClick={handlePrintInvoice} className='printbutton'>Print Invoice</button>
            <button onClick={resetInvoiceNumber} className='reset'>Reset</button>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    font-family: Arial, sans-serif;
    .container{
        padding-left: 1rem;
    }
   
    table {
        width: 100%;
    }

    h2 {
        margin: 0;
        font-size: 2.2rem;
    }

    input, textarea {
        border: transparent;
        border-bottom: 1px solid black;
        width: 100%;
        padding: 0.8rem 1rem;
        font-size: 1.6rem;
    }

    .grid {
        display: grid;
        gap: 6rem;
    }

    @media print {
        .vehical{
            input{
                margin-top: -0.4rem;
            }
        }
        .container {
            display: flex;
            justify-content: space-between;
        }

        input, textarea {
            border: transparent;
            width: 21rem; /* Set width to auto for dynamic sizing */
            font-size: 1.2rem;
            padding: 0;
        }
        textarea::-webkit-resizer {
            display: none; /* Hide the resize icon specifically for textarea */
        }
        h2 {
            font-size: 1.2rem;
        }
    }
`;

const TextArea = styled.textarea`
    resize: vertical; /* Allow vertical resizing */
`;

export default Info;
