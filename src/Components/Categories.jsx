import React from 'react'
import "../Stylesheets/Categories.css"

const Categories = () => {
  return (
    <section className='categories'>
        
        <div className="individual-slides">
            <h2 className="slide-text">comics</h2>
        </div>
        <div className="individual-slides">
            <h2 className="slide-text">Kids Comics</h2>
        </div>
        <div className="individual-slides">
            <h2 className="slide-text">Latest Comics</h2>
        </div>
        <div className="individual-slides">
            <h2 className="slide-text">Adventures</h2>
        </div>
        <div className="individual-slides">
            <h2 className="slide-text">Action</h2>
        </div>
        <div className="individual-slides">
            <h2 className="slide-text">Imagination</h2>
        </div>
        <div className="individual-slides">
            <h2 className="slide-text">Romance</h2>
        </div>
        
    </section>
  )
}

export default Categories