import React from 'react'

function LeftSection({imgUrl, productTitle, productDescription, link1, link2, link1Name, link2Name, google, apple}) {
  return (
    <div className="container">
        <div className="row">
            <div className="col-8 mb-5">
                <img src={imgUrl} alt="img" />
            </div>
            <div className="col mt-5">

                <h4 className='mt-3 mb-4'>{productTitle}</h4>
                <p style={{lineHeight:"2", fontSize:"16px"}}>{productDescription}</p>

                <div className='mt-4'>
                    <a style={{textDecoration:"none"}} className='me-5' href={link1}>{link1Name}</a>
                    <a style={{textDecoration:"none"}} href={link2}>{link2Name}</a>
                </div>
                
                <div className='mt-4'>
                    <a className='me-4 store-badge' href={google}>
                        <img src="/media/images/googlePlayBadge.svg" alt="GoogleLogo"/>
                    </a>
                    <a className="store-badge" href={apple}>
                        <img src="/media/images/appstoreBadge.svg" alt="applestorelogo"/>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LeftSection
