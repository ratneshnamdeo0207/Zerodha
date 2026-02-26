import React from 'react'

function AccountOpening() {
  return (
    <div className="container">
        <div className="row">
            
            
                <h4>Charges for account opening</h4>
               <div className="card mb-5">
                <div className="card-body p-0">
                     <table class="table mb-0">
                    <thead>
                        <tr className=''>
                            <th>Type of account</th>
                            <th className="text-end px-5">Charges</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Online account</td>
                            <td className="text-end px-5"><span className="badge p-1 bg-success">FREE</span></td>
                        </tr>
                        <tr >
                        
                            <td style={{backgroundColor:"#f9fcf8"}}>Offline account</td>
                            <td style={{backgroundColor:"#f9fcf8"}} className="text-end px-5"><span className="badge p-1 bg-success">FREE</span></td>
                      
                        </tr>
                        <tr>
                            <td >NRI account (offline only)</td>
                            <td className="text-end px-5">₹ 500</td>
                        </tr>
                       
                        <tr>
                            <td style={{backgroundColor:"#f9fcf8"}}>Partnership, LLP, HUF, or Corporate accounts (offline only) </td>
                            <td style={{backgroundColor:"#f9fcf8"}} className="text-end px-5">₹ 500</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
               </div>
            </div>

        </div>
    
  )
}

export default AccountOpening
