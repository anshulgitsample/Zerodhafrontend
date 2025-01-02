import React from "react";

function Hero(){
    return(
        <div className="container-fluid border-top" id="supportid">
            <div className="row " style={{paddingTop:"50px",marginLeft:"65px" }}>
                <h3 className="" style={{color:"white", marginLeft:"140px"}}>Support portal</h3>
                <a style={{textDecoration:"none",color:"white", textAlign:"center",marginLeft:"400px" ,position:"absolute"}} href="">Track tickets</a>
            </div>
            <div className="row p-4 ">
                <div className="col p-5" style={{marginLeft:"150px"}}> 
                  <h4 style={{color:"white"}} className="mb-4">Search for an answer or browse help topics to create a ticket</h4>
                  <input style={{padding:"15px 200px" ,borderRadius:"5px"}} className="mb-3" placeholder="Eg: How do i activate my F&O"></input><br></br>
                 <a  className="fs-5" style={{color:"white"}} href="">Track account opening</a>
                 <a  className="fs-5" style={{color:"white"}} href=""> Track segment activation</a>
                 <a  className="fs-5" style={{color:"white"}} href="">intraday margins</a><br></br>
                 <a  className="fs-5" style={{color:"white"}} href="">kite user manual</a>
                </div>
                <div className="col p-5 " style={{color:"white", marginRight:"140px" ,marginTop:"40px"}} >
                    <h3>Featured</h3>
                    <a style={{color:"white"}} href="">1.Trading holiday on account of Christmas on December 25, 2024</a><br></br><br></br>
                    <a style={{color:"white"}}  href="">2.Latest Intraday leverages and Square-off timings</a>
                 </div>
            </div>
        </div>
    )
}
export default Hero;