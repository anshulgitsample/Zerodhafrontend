import React from "react";

function LeftSection({imageURL ,productname,productdescription ,trydemo ,learnmore, googleplay ,appstore}){
    return(
        <div className="container mt-5 ">
            <div className="row mt-5">
                <div className="col-6 p-5">
                    <img src={imageURL}/>
                </div>
                <div className="col-6 p-5" style={{width:'40%'}}>
                    <h1 className="mt-5 mb-3">{productname}</h1>
                    <p>{productdescription}</p>
                   <div><a style={{textDecoration:"none"}}  href={trydemo}>try demo</a>
                    <a style={{marginLeft:"50px", textDecoration:"none"}} href={learnmore}>learn more</a> </div> 
                    <div style={{marginTop:"30px"}}><a href={googleplay}><img src="media/images/googlePlayBadge.svg"/></a>
                    <a style={{marginLeft:"50px" }} href={appstore}><img src="media/images/appstoreBadge.svg"/></a></div>
                </div>
            </div>
        </div>
    )

}
export default LeftSection;