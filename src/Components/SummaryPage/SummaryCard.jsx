import React from 'react'
import { SummaryData } from './SummaryData'
import { FastForwardCircle } from 'phosphor-react'

const SummaryCard = () => {
  return (
    <>

    {
        SummaryData.map((items, val) => {
            return (
                <div className="summary_container">
        <div className="card">
            <div className="card-img">
                {/* <img src={items.img_url} alt="" /> */}
                </div>

                <div className="card__details">
                    <p>Price: $ {items.price}</p>
                    <p>Preview <FastForwardCircle /></p>
                </div>
        </div>
    </div>
            )
        } )
    }

    


    </>
  )
}

export default SummaryCard