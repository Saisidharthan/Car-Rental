import React from 'react'

function TostMsg({msg}:any) {
  return (
    <div>
        <div className="toast toast-top toast-center shrink-0 flex">
            <div className="alert alert-success  bg-black text-white duration-200">
                <span>{msg}</span>
            </div>
        </div>
    </div>
  )
}

export default TostMsg