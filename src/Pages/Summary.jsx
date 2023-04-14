import React from 'react'
import SummaryCard from '../Components/SummaryPage/SummaryCard'

import '../Stylesheets/summary.css'

const Summary = () => {
  return (
    <>
     {/* <span>Home / preview /Cart </span> */}
    <div className="summary-cont">
       

        <div className="summary-prog">
            <ul>
                <li>Cart </li>
                <li>Order Summary </li>
                <li>Payment Details  </li>
            </ul>

            <div className="underline">
                <div className="linee"></div>
            </div>

            <SummaryCard />
        </div>
        <div className="order-summary">

        </div>
    </div>

          
    </>
  )
}

export default Summary