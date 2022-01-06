import React from 'react'
import '../assets/scss/Header.scss'
import Logo from '../assets/images/logo.png'

function Header() {


    return (
        <div className='header'>
            <div className="container">
                <div className="big">
                    <div className="row">
                        <div className="col-lg-2 col-xs-12 ">
                            <div className="logo">
                                <img src={Logo} alt="" srcset="" />
                            </div>
                        </div>
                        <div className="col-lg-7 col-xs-12">
                            <ul>
                                <li>Home</li>
                                <li>Collections</li>
                                <li>How We Collect</li>
                                <li> Sell An Antique</li>
                                <li>Blog</li>
                            </ul>
                        </div>
                        <div className="col-lg-2 offset-lg-1 col-xs-12">
                            <div className="button">
                                <button className='btn'>Our Collections</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="small">
                    <div className="row">
                        <div className=" col-6 ">
                            <div className="logo">
                                <img src={Logo} alt="" srcset="" />
                            </div>
                        </div>
                        <div class="dropdown offset-5 col-1">
                            <div className=" dropdown-toggle d-flex justify-content-end" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="fas fa-bars"></i>
                            </div>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li>Home</li>
                                <li>Collections</li>
                                <li>How We Collect</li>
                                <li> Sell An Antique</li>
                                <li>Blog</li>
                            </ul>
                        </div>

                        <div className="button col-12 ">
                            <button className='btn'>Our Collections</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Header
