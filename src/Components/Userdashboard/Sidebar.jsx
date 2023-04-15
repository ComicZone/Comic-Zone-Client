import React from 'react'
import {MdCollections, MdHistory, MdLogout} from "react-icons/md"
import {CiSaveDown2} from "react-icons/ci"

const Sidebar = () => {
  return (
    <section className='user-sidebar-container'>
        <div className="user-profile-image">J</div>
        <h2 className="username">Welcome back!</h2>
        <h3 className="user-profilename">Ibelachi Chinedu</h3>
        <div className="user-buttons">
            <div className="cart-items">
                <p className="cart-header">cart</p>
                <p className="cart-text">23</p>
            </div>
            <div className="user-downloads">
            <p className="download-header">Downloaded</p>
                <p className="download-text">10</p>
            </div>
        </div>
        <div className="sidebar-items">
            <div className="individual-sidebar-items">
                <span className="side-icons"><MdCollections/></span> <h2 className="sidebar-items">collections</h2>
            </div>
            <div className="individual-sidebar-items">
                <span className="side-icons"><CiSaveDown2/></span> <h2 className="sidebar-items">saved</h2>
            </div>
            <div className="individual-sidebar-items">
                <span className="side-icons"><MdHistory/></span> <h2 className="sidebar-items">history</h2>
            </div>
            <div className="individual-sidebar-items">
                <span className="side-icons"><MdLogout/></span> <h2 className="sidebar-items">Logout</h2>
            </div>
        </div>
    </section>
  )
}

export default Sidebar