import React from 'react'

function Hero() {
  return (
   <div className="container ">
      <div className="row text-center ">
  
        <img className="mb-5" src="/media/images/homeHero.png" alt="homeHero.png" />
        <h1 className="mt-4">Invest in everything</h1>
        <p>Online platform to invest in stocks, derivatives, mutual funds, and
          more</p>
        <button className='btn mb-5 p-2 btn-primary fs-4' style={{width:"20%", margin:"0 auto"}}>Signup Now</button>
      </div>
   </div>
  )
}

export default Hero
