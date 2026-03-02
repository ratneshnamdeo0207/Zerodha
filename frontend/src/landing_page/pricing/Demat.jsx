import React from 'react'

function Demat() {
  return (
   <div className="container">
        <div className="row">
            
            
                <h4>Demat AMC (Annual Maintenance Charge)</h4>
               <div className="card mb-5">
                <div className="card-body p-0">
                     <table class="table mb-0">
                    <thead>
                        <tr className=''>
                            <th>Value of holdings</th>
                            <th className="text-end px-5">AMC</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Up to ₹4 lakh</td>
                            <td className="text-end px-5"><span className="badge p-1 bg-success">FREE</span></td>
                        </tr>
                        <tr >
                        
                            <td style={{backgroundColor:"#f9fcf8"}}>₹4 lakh - ₹10 lakh</td>
                            <td style={{backgroundColor:"#f9fcf8"}} className="text-end px-5">₹ 100 per year, charged quarterly*</td>
                      
                        </tr>
                        <tr>
                            <td >Above ₹10 lakh</td>
                            <td className="text-end px-5">₹ 300 per year, charged quarterly</td>
                        </tr>
                       
                    </tbody>
                    </table>
                </div>
               </div>
            </div>

        </div>
  )
}

export default Demat
