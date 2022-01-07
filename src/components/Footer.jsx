import React from 'react'
import "../assets/scss/Footer.scss"
import Logo from '../assets/images/logo.png'

function Footer() {
    return (
        <div className='footer'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <ul>
                            <h4>Resources</h4>
                            <li>
                                Download
                            </li>
                            <li>
                                Help Center
                            </li>
                            <li>
                                Guide Book
                            </li>
                            <li>
                                App Directory
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-sm-6 ">
                        <ul>
                            <h4>Seboria</h4>
                            <li>
                                Why Seboria
                            </li>
                            <li>
                                Our Collection Process
                            </li>
                            <li>
                                Customer Stories
                            </li>
                            <li>
                                Instagram Post
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <ul>
                            <h4>Company</h4>
                            <li>
                                Antiques
                            </li>
                            <li>
                                Abour Seboria
                            </li>
                            <li>
                                Success
                            </li>
                            <li>
                                Information
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <ul>
                            <h4>Get in Touch</h4>
                            <li>
                                <h6 className='first'>Feel free to get in touch with us vai emalil</h6>
                            </li>
                            <li>
                                <h6 className='second'>shakir260@gmail.com</h6>
                            </li>
                        </ul>
                    </div>
                    <hr />
                </div>


                <div className="last-footer">
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
                        <div className="contact col-lg-2 offset-lg-1 col-xs-12 d-flex justify-content-around">
                            <i class="fab fa-facebook-f"></i>
                            <i class="fab fa-instagram"></i>
                            <i class="fab fa-twitter"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
