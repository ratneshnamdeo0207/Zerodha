import React from 'react'

function Value() {
  return (
    <div className="container mt-5">
        <div className="row">
            <div className="col mt-5 text-center">
                <img src="/media/images/pricing0.svg" alt="Zero price"  style={{width:"70%"}} />
                <h2 className="mt-3">Free equity delivery</h2>
                <p className="mt-4 text-muted">All equity delivery investments (NSE, BSE),<br /> are absolutely free — ₹ 0 brokerage.</p>
            </div>
            <div className="col mt-5 text-center">
               <img src="/media/images/pricing20.svg" alt="Twenty price" style={{width:"70%"}} />
                <h2 className="mt-3">Intraday and F&O trades
</h2>
                <p className="mt-4 text-muted">Flat ₹ 20 or 0.03% (whichever is lower) per <br /> executed order on intraday trades across <br />equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
            </div>
            <div className="col mt-5 text-center">
               <img src="/media/images/pricing0.svg" alt="Zero price"  style={{width:"70%"}} />
                <h2 className="mt-3">Free direct MF</h2>
                <p className="mt-4 text-muted">All direct mutual fund investments are <br /> absolutely free — ₹ 0 commissions & DP  <br />charges.</p>
            </div>
        </div>
    </div>
  )
}

export default Value

