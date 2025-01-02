import React from "react";

function RaiseTicket(){
    return(
        <div className="container ">
            <div className="row border-top p-5 mt-5">
                <h2 className="text-muted mb-3 fs-4 " style={{marginLeft:"25px"}}>To create a ticket, select a relevant topic</h2>
                <div className="col-4 p-4">
                    <h4 className="" style={{marginLeft:"25px"}}><i class="fa fa-plus-circle" aria-hidden="true"></i> Account Opening</h4>
                    <ul className="" style={{listStyle:"none"}}>
                        <li className="mt-4 mb-3"><a style={{textDecoration:"none"}} href="">Getting started</a></li>
                        <li className=" mb-3"><a style={{textDecoration:"none"}} href="">online</a></li>
                        <li className=" mb-3"><a style={{textDecoration:"none"}} href="">offline</a></li>
                        <li className=" mb-3"><a style={{textDecoration:"none"}} href="">charges</a></li>
                        <li className=" mb-3"><a style={{textDecoration:"none"}} href="">Company, Partnership and HUF</a></li>
                        <li className=" mb-3"><a style={{textDecoration:"none"}} href="">Non Resident Indian (NRI)</a></li>
                    </ul>
                </div>
                <div className="col-4 mt-4">
                <h4 className="" style={{marginLeft:"25px"}}> Your Zerodha Account</h4>
                    <ul className="" style={{listStyle:"none"}}>
                        <li className="mt-4 mb-3"><a style={{textDecoration:"none"}} href="">Login credentials</a></li>
                        <li className=" mb-3"><a style={{textDecoration:"none"}} href="">Your Profile</a></li>
                        <li className=" mb-3"><a style={{textDecoration:"none"}} href="">Account modification and segment addition</a></li>
                        <li className=" mb-3"><a style={{textDecoration:"none"}} href="">CMR & DP ID</a></li>
                        <li className=" mb-3"><a style={{textDecoration:"none"}} href="">Nomination</a></li>
                        <li className=" mb-3"><a style={{textDecoration:"none"}} href="">Transfer and conversion of shares</a></li>
                    </ul>
                </div>
                <div className="col-4 mt-4">
                <h4 className="" style={{marginLeft:"25px"}}> Trading and Markets</h4>
                    <ul className="" style={{listStyle:"none"}}>
                        <li className="mt-4 mb-3"><a style={{textDecoration:"none"}} href="">Trading FAQs</a></li>
                        <li className=" mb-3"><a style={{textDecoration:"none"}} href="">Kite</a></li>
                        <li className=" mb-3"><a style={{textDecoration:"none"}} href="">Margins</a></li>
                        <li className=" mb-3"><a style={{textDecoration:"none"}} href="">Product and order types</a></li>
                        <li className=" mb-3"><a style={{textDecoration:"none"}} href="">Corporate actions</a></li>
                        <li className=" mb-3"><a style={{textDecoration:"none"}} href=""> Kite feature</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default RaiseTicket;