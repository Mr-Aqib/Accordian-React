import React, { useState } from 'react'
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
const FAQS = ({ question, answer }) => {
    const [openn,setOpenn]=useState(false)
  return (
      <>
          <div className="container border border-1 border-white shadow p-3 rounded-4 my-2">
              <div className="d-flex flex-row align-items-center justify-content-between">
                  <h5 className='text-danger'>{question }</h5>
                  <div>
                      {openn ? (<CiCircleMinus CiCirclePlus onClick={() => setOpenn(false)} cursor="pointer" size={25} className='text-white' />)
                          : (<CiCirclePlus onClick={() => setOpenn(true)} cursor="pointer" size={25} className='text-danger' />)
                      }
                     
                  </div>
                  

              </div>
              
              <p className='faqp m-0 p-0' style={{
                  height: `${openn ? '60px' : '0'}`
                  , overflow: 'hidden',
                  
              }}>{answer}</p>
          </div>
      </>
  )
}

export default FAQS