import React from "react";
function RightSection({imageURL ,productname,productdescription ,trydemo}) {
    return (
        <div className="container ">
        <div className="row mt-5">
            <div className="col-6 p-5  mt-5" style={{width:'40%'}}>
                <h1 className="mt-5">{productname}</h1>
                <p>{productdescription}</p>
               <div><a style={{textDecoration:"none"}}  href={trydemo}>Learn more</a>
                </div> 
            </div>
            <div className="col-6 p-5 ">
                <img src={imageURL}/>
            </div>
        </div>
    </div>
    );
};

export default RightSection;