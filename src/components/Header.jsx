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


                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <div class="container-fluid">
                            <a class="navbar-brand logo" href="#"><img src={Logo} alt="" srcset="" /></a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNav">
                                <ul class="navbar-nav">
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Collections</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">How We Collect</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#" >Sell An Antique</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#" >Blog</a>
                                    </li>
                                    <li class="nav-item">

                                        <div className="button">
                                            <button className='btn'>Our Collections</button>
                                        </div>

                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>


                </div>
            </div>
        </div>
    )
}

export default Header
