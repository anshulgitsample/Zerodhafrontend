import React from "react";

function Hero(){
    return(
        <div className="container border-top  ">
            <h1 className="mb-3 mt-5 text-center">Charges</h1>
          <p className="text-muted text-center">List of all charges and taxes</p>
          <div className=" mt-5 row p-5 ">
            <div className="mt-5 col">
                <img  style={{width:"70%" ,marginLeft:"50px"}} src="media/images/pricing0.svg"></img>
                <h3 className="text-center">Free equity delivery</h3>
                <p className="text-muted text-center">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
            </div>
            <div className="mt-5 col">
            <img style={{width:"70%" ,marginLeft:"50px"}} src="media/images/intradayTrades.svg"></img>
            <h3 className="text-center">Intraday and F&O trades</h3>
            <p className="text-muted text-center">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
            </div>
            <div className="mt-5 col">
            <img  style={{width:"70%" ,marginLeft:"50px"}} src="media/images/pricingMF.svg"></img>
            <h3 className="text-center">Free direct MF</h3>
            <p className="text-muted text-center">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
            </div>
          </div>
        </div>
    )
}
export default Hero;