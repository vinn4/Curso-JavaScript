import './Logo.css'
import React from 'react'
import logo44 from '../../assets/imgs/logo44.png'
import { Link } from 'react-router-dom'

export default props =>
<aside className="logo">
    <Link to="/" className="logo">
        <img src={logo44} alt="logo" />
    </Link>
</aside>