import React from 'react'

function Universe() {
  return (
   <div className="container">
    <div className="row text-center my-5">
        <h5 className='text-muted mb-4'>Want to know more about our technology stack? Check out the <a style={{textDecoration:"none"}} href="https://zerodha.tech/">Zerodha.tech</a>  blog.</h5>
    </div>
    <div className="row my-5 text-center">
         <h4 className='text-muted mt-4'>The Zerodha Universe</h4>
         <p className='text-muted my-3'>Extend your trading and investment experience even further with our partner platforms</p>
    </div>
    <div className="row">
      {/* <div className="col-1 "></div> */}
        <div className="col text-center">
          <a className='text-muted' style={{textDecoration:"none"}} href="https://www.zerodhafundhouse.com/">
            <div>
            <img src="/media/images/zerodhaFundhouse.png" alt="ZerodhaFundHouse" style={{width:"60%"}} />
            <p className='mt-4 pb-3' style={{fontSize:"12px"}}>Our asset management venture <br />That is creating simple and transparent index <br />funds to help you save for your goals</p>
          </div>
          </a>
          <a className='text-muted ' style={{textDecoration:"none"}} href="https://streak.tech/">
            <div className='mt-5'>
            <img src="/media/images/streakLogo.png" alt="streakLogo" style={{width:"45%"}} />
            <p className='mt-4' style={{fontSize:"12px"}}>Systematic trading platform <br /> that allows you to create and backtest <br /> strategies without coding.</p>
          </div>
          </a>
        </div>
        
        <div className="col mt-3 text-center">
          <a className='text-muted' style={{textDecoration:"none"}} href="https://sensibull.com/">
            <div>
            <img src="/media/images/sensibullLogo.svg" alt="sensibullLogo" style={{width:"65%"}} />
            <p className='mt-4 pb-3 text-muted' style={{fontSize:"13px"}}>Options trading platform that lets you <br />create strategies, analyze positions, and examine <br /> data points like open interest, FII/DII, and more.</p>
          </div>
          </a>
          <a className='text-muted ' style={{textDecoration:"none"}} href="https://smallcase.zerodha.com/">
            <div className='mt-5'>
            <img src="/media/images/smallcaseLogo.png" alt="sensibullLogo" style={{width:"60%"}} />
            <p className='mt-4 text-muted' style={{fontSize:"12px"}}>hematic investing platform <br /> that helps you invest in diversified <br /> baskets of stocks on ETFs.</p>
          </div>
          </a>
        </div>
        <div className="col mt-3 text-center">
          <a className='text-muted' style={{textDecoration:"none"}} href="https://www.tijorifinance.com/">
            <div>
            <img src="/media/images/tijori.svg" alt="tijoriLogo" style={{width:"40%"}} />
            <p className='mt-3 pb-3 text-muted' style={{fontSize:"13px"}}>Investment research platform <br /> that offers detailed insights on stocks, <br />sectors, supply chains, and more.</p>
          </div>
          </a>
          <a className='text-muted ' style={{textDecoration:"none"}} href="https://joinditto.in/">
            <div className='mt-5'>
            <img src="/media/images/dittoLogo.png" alt="dittologo" style={{width:"40%"}} />
            <p className='mt-4 text-muted' style={{fontSize:"12px"}}>Personalized advice on life <br />and health insurance. No spam <br />and no mis-selling.</p>
          </div>
          </a>
        </div>
          <span className='text-center mt-5 mb-5'><button className="btn btn-primary  btn-lg p-1 fs-5" style={{width:"18%", borderRadius:"0%"}}>Sign Up for Free</button></span>
    </div>
   </div>
  )
}

export default Universe
