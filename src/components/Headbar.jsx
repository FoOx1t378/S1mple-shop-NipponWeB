import React from 'react'
import { Link } from 'react-router-dom'

const Headbar = () => {
    return (
        <header className="header">
            <div className="container1">
                <div className="header__nav">
                    <div className="header__nav-logo">
                        <Link to='/' className="header__nav-logo_link">
                            NipponWeBshop
                        </Link>
                    </div>
                    <ul className="header__nav-list">
                        <li className="header__nav-list_item">
                            <Link to="/" className="header__nav-list_item-link">
                                Home
                            </Link>
                        </li>
                        <li className="header__nav-list_item">
                             <Link to="/shop" className="header__nav-list_item-link">
                                shopCar
                            </Link>
                        </li>
                        <li className="header__nav-list_item">
                             <Link to="" className="header__nav-list_item-link">
                                shopBike
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Headbar