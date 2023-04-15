import React from 'react'

import SummaryCard from '../Components/SummaryPage/SummaryCard'
import { FaArrowRight } from "react-icons/fa";
import '../Stylesheets/summary.css'
import CheckoutButton from '../Components/CheckoutButton'

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

            <div className="summary__order__cont">
                <h3 className='summary__head'>Order Summary</h3>
                <hr />
                <h3 className='apply'>Apply Coupoun </h3>
                <form action="#" onSubmit={(e)=>{e.preventDefault()}}>
                    <input type="text"  placeholder='Enter coupoun code'/>
                    <button>
                        <FaArrowRight className='icon' />
                    </button>
                </form>
                 <hr />

                 <div className="cart__summary">
                    <h3>Cart Subtotal </h3>
                    <p>Price {`$ ${30}`}</p>
                 </div>
                 <div className="vat__cont">
                    <h3>VAT  </h3>
                    <p>Price {`$ ${0} (`} <span>free</span>{`)`}</p>
                 </div>

                 <hr />

                 <div className="total__checkout">
                    <h5>Total</h5>
                    <p>{`$ ${50}`}</p>
                 </div>

           <CheckoutButton className='summary__btn' />

            </div>
           
        </div>
    </div>

          
    </>
  )
}

export default Summary