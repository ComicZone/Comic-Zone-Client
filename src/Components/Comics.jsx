import React from 'react'
import "../Stylesheets/Comics.css"

const Comics = () => {
  return (
    <section className='latest-comics'>
      <div className="container">
        <div className="latest_comics_title">
            <h2 className="comic_header">Latest Comics</h2>
            <a href="#"> <span className='comic_link'>See all</span></a>
        </div>
      </div>
    </section>
  )
}

export default Comics