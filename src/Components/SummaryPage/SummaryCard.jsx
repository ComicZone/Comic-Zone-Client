import React from 'react'
import { SummaryData } from './SummaryData'
import { FastForwardCircle } from 'phosphor-react'
import '../../Stylesheets/summary.css'
import Ratings from '../Ratings'

const SummaryCard = () => {
  return (
    <>

    {
        SummaryData.map((items, val) => {
            return (
                <div className="summary__card">
        <div className="card">
            <div className="card__img">
                <img src={items.img_url} alt="" />
                </div>

                <div className="card__details">
                    <div className="summary__para">
                         <p>Price : $ {items.price}</p>

                         <div className='rating__cont'>
                            <p>
                                Preview
                            </p>
                            <Ratings size={16} rating={3.9} className={'ratings'}/>
                                <div className="rating__count">
                                    ({items.preview_count})
                                </div>


                         </div>
                  
                    </div>
                   
                    <div className="little__card__img">
                        <img src={items.img_url} alt="" />
                        <img className='back__cover ' src={items.img_url} alt="" />
                    </div>
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
