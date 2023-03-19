import React from 'react'
import "./Header.css"
import { Link } from "react-router-dom"
import NoImdbIcon from '../../images/icon.jpg'

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="headerLeft">
            <Link to='/'><img src={NoImdbIcon} alt="Header Icon" className="header_icon"/></Link>
            <Link className="paths" to='/movies/popular'><span>Popular</span></Link>
            <Link className="paths" to='/movies/top_rated'><span>Top Rated</span></Link>
            <Link className="paths" to='/movies/upcoming'><span>Upcoming</span></Link>
        </div>
      </div>
    </div>
  )
}

export default Header