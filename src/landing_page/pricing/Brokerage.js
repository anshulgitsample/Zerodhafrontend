import React from 'react';

function Brokerage() {
    return (
        <div className='container mt-5'> 
        <div className='row mt-5 p-5  border-top'>
            <div className='col-8 p-4'>
           <a style={{textDecoration:"none"}} href=""><h3 className='text-center' style={{marginRight:"140px"}}>Brokerage calculator</h3></a>
           <br></br>
           <ul>
            <li>₹100 per order for futures and options</li>
            <li>For a non-PIS account, 0.5% or ₹100 per executed order for equity (whichever is lower)</li>
            <li>For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
            <li>₹500 + GST as yearly account maintenance charges (AMC) charges.</li>
            <li>Equity and Futures - ₹10 per crore + GST of the traded value.</li>
            <li>Options - ₹50 per crore + GST traded value (premium value).</li>
            <li>Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST of premium for Options.</li>
           </ul>
            </div>
            <div className='col-4 p-4'>
            <a style={{textDecoration:"none"}}  href=""><h3 style={{marginRight:"120px",textDecoration:"none"}}>list of charges</h3></a>
            </div>
            </div>     
        </div>
    );
};

export default Brokerage;