import React from 'react'
import { data } from './data'
import FAQS from './FAQS'

const Accordian = () => {
  return (
      <>
          <div className="container">
              <div className="rounded-4 shadow mx-auto p-3 col-lg-5">
                  <p className='fs-1 text-center my-3'>
                    Accordian
                  </p>
                  <div>
                      {
                          data.map((items, index) =>
                          {
                              return <>
                                  <FAQS key={ index} {...items} />
                              </>
                        })
                      }
                  </div>
              </div>
          </div>
      </>
  )
}

export default Accordian