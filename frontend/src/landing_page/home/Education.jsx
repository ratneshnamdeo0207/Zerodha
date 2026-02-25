import React from 'react'

function Education() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <img src="/media/images/education.svg" alt="education.svg" style={{width:"70%"}}/>
        </div>
        <div className="col">
           <h2 className='mb-5 fs-2'>Free and open market education</h2>
            <p className='text-muted'>Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.</p>

            <a href="#" className='mb-5' style={{textDecoration: "none"}} > Versity 
            &nbsp;&nbsp; <i class="fa-solid fa-arrow-right-long"></i>
            </a>
          
             <p className='mt-5 text-muted'> TradingQ&A, the most active trading and investment community in
            India for all your market related queries.</p>
            <a href="#" className='mb-5' style={{textDecoration: "none"}} > TradingQ&A 
            &nbsp;&nbsp; <i class="fa-solid fa-arrow-right-long"></i>
            </a>

        </div>
      </div>
    </div>
  )
}

export default Education
