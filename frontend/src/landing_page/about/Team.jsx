import React from 'react'

function Team() {
  return (
    <div className="container">
      <div className="row text-center mt-5 mb-4">
        <h4 className='mt-5 '>People</h4>
      </div>
      
      <div className="row">
        <div className="col-1"></div>
        <div className="col-4 text-center">
        <img className='mt-5 ms-5' src="/media/images/nithinKamath.jpg" alt="nithinKamath" style={{borderRadius:"100%", width:"85%"}}/>
        <p className='fs-5 mt-3 ms-5 text-muted'>Nithin Kamath</p>
        <p className='mt-3 ms-5 text-muted'>Founder, CEO</p>
      </div>
      <div className="col mt-5">
        <p className="mt-2 " style={{fontSize:"18px"}}>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
        <p className="mt-2" style={{fontSize:"18px"}}>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
        <p className="mt-2" style={{fontSize:"18px"}}>Playing basketball is his zen.</p>
        <p className="mt-2" style={{fontSize:"18px"}}> Connect on <a style={{textDecoration:"none"}} href="https://nithinkamath.me/">Homepage</a> / <a style={{textDecoration:"none"}} href="https://tradingqna.com/u/nithin/summary">TradingQnA</a> / <a style={{textDecoration:"none"}} href="https://twitter.com/Nithin0dha">Twitter</a></p>
        
      </div>
      <div className="col-1"></div>
      </div>
    </div>
  )
}

export default Team
