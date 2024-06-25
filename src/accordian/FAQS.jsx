import React from 'react'
import { CiCirclePlus } from "react-icons/ci";

const FAQS = ( {question,answer}) => {
  return (
      <>
          <div className="container shadow p-3 rounded-4 my-2">
              <div className="d-flex flex-row align-items-center justify-content-between">
                  <h3 className='text-danger'>{question }</h3>
                  <div>
                      <CiCirclePlus  size={25} className='text-danger'/>
                  </div>
                  

              </div>
              
              <p style={{ height: 0 , overflow:'hidden'}}>{answer }</p>
          </div>
      </>
  )
}

export default FAQS