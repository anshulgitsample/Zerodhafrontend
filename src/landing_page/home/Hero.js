import React from 'react';

function Hero() {
    return (
      <div className='container p-5'>
        <div className='row  text-center'>
          <img src='media/images/HomeHero.png' className='mb-5'/>
          <h1 style={{display:"block",margin:"auto",width:"50%"}}>Invest in everything</h1>
          <br></br>
          <br></br>
          <br></br>
          <p className='mb-5'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
          <button className='fs-4 btn btn-primary' style={{width:"200px" ,borderRadius:"5px", display: 'block',margin: 'auto',width: '20%'}}>Sign up for free</button>
        </div>
      </div>
      );
}

export default Hero;