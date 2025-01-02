import React from 'react';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';

 function ProductPage() {
    return ( <> 
    <Hero></Hero>
    <LeftSection imageURL="media/images/kite.png"
     productname="Kite" 
     productdescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." 
     trydemo="" 
     learnmore="" 
     googleplay="" 
     appstore=""
     />
     <RightSection
     imageURL="media/images/console.png"
     productname="Console" 
     productdescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." 
     trydemo="" 
     learnmore="" 
     googleplay="" 
     appstore=""/>
     <LeftSection imageURL="media/images/coin.png"
     productname="Coin" 
     productdescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." 
     trydemo="" 
     learnmore="" 
     googleplay="" 
     appstore=""
     />
     <RightSection
     imageURL="media/images/kiteconnect.png"
     productname="Kite connect API" 
     productdescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." 
     trydemo="" 
     learnmore="" 
     googleplay="" 
     appstore=""/>
     <LeftSection imageURL="media/images/varsity.png"
     productname="Varsity Mobile" 
     productdescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." 
     trydemo="" 
     learnmore="" 
     googleplay="" 
     appstore=""
     />
     <br></br>
     <h4 className='text-center text-muted fs-5 mt-5 mb-5'>
     Want to know more about our technology stack? Check out the <a style={{textDecoration:'none'}}  href="">Zerodha.tech</a> blog.
     </h4>
     <Universe/>
    </>
    )
}

export default ProductPage;