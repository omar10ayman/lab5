import React from 'react'

export default function LoadingBar() {
  return (
    <div className="  position-absolute spinner-border" style={{
        left:"50%",
        top:"50%",
        width:"5rem",
        height:"5rem",
        // transform:"translate(-50%, -50%)"
    }} role="status">
    <span className=" w-50 visually-hidden">Loading...</span></div>
  )
}
