import React from 'react'
import Hero from "./Hero"
import Universe from './Universe'
import LeftSection from './LeftSection'
import RightSection from './RightSection'
function ProductPage() {
  return (
    <>
      <Hero/>
      <LeftSection 
      imgUrl="/media/images/kite.png" 
      productTitle="Kite" 
      productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite  experience seamlessly on your Android and iOS devices." 
      link1="https://kite-demo.zerodha.com/" 
      link2="https://zerodha.com/products/kite" 
      link1Name="Try Demo → " 
      link2Name=" Learn more →" 
      google="https://play.google.com/store/apps/details?id=com.zerodha.kite3" apple="https://apps.apple.com/in/app/kite-zerodha/id1449453802"/>
      <RightSection
      imgUrl="/media/images/console.png" 
      productTitle="Console" 
      productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." 
      link1="https://zerodha.com/products/console" 
      link2="" 
      link1Name="Learn more → " 
      link2Name="" 
      />
      <LeftSection 
      imgUrl="/media/images/coin.png" 
      productTitle="Coin" 
      productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." 
      link1="https://coin.zerodha.com/" 
      link2="" 
      link1Name="Coin → " 
      link2Name="" 
      google="https://play.google.com/store/apps/details?id=com.zerodha.coin" apple="https://apps.apple.com/in/app/coin-by-zerodha/id1392892554"/>

      <RightSection
      imgUrl="/media/images/landing.svg" 
      productTitle="Kite Connect API" 
      productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." 
      link1="https://zerodha.com/products/api/" 
      link2="" 
      link1Name="Kite Connect → " 
      link2Name="" 
      />
      <LeftSection 
      imgUrl="/media/images/varsity.png" 
      productTitle="Varsity mobile" 
      productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." 
      link1="" 
      link2="" 
      link1Name="" 
      link2Name="" 
      google="https://play.google.com/store/apps/details?id=com.zerodha.varsity" apple="https://apps.apple.com/in/app/varsity-by-zerodha/id1474610753"/>
      
      <Universe/>
    </>
  )
}

export default ProductPage
