import React from 'react'

export default function EachImg({img}) {
  return (
    <div className='col-3' style={{
        backgroundImage:`url(${img})`,
        backgroundPosition:"center center",
        backgroundSize:"contain",
        backgroundRepeat:"no-repeat",
        height:"264px"
   }} />
  )
}
