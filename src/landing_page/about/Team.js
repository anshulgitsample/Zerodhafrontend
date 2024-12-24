import React from "react";
import { Link } from "react-router-dom";
function Team() {
  return (
    <div className="container">
        <div className="row border-top text-center  ">
        <h2 className="mt-5 fs-2">People</h2>
        </div>
      <div className="row p-5  ">
        <div className="col p-4 " >
            <img src="media/images/nithinKamath.jpg" style={{width:"60%",marginLeft:"180px",marginBottom:'20px',borderRadius:"100%"}}/>
            <h4 className="text-muted text-center" style={{marginLeft:"180px"}}>Nithin Kamath</h4>
            <p className="text-muted text-center" style={{marginLeft:"180px"}}>Fouder,CEO</p>
        </div>
        <div className="col p-4 " style={{marginRight:"180px"}}>
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>
          Playing basketball is his zen.
          </p>
          <p>Connect on <a style={{textDecoration:"none"}} href="">Homepage / tradingQnA / twitter </a></p>
        </div>
      </div>
    </div>
  );
}
export default Team;
