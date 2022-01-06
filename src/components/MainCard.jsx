import React from 'react'
import "../assets/scss/MainCard.scss"
import Vase from "../assets/images/vase.png"
import Play from "../assets/images/play.png"
import Year from "../assets/images/year.png"
import Bid from "../assets/images/bid.png"
import Origin from "../assets/images/origin.png"

function MainCard() {
    return (
        <div className='maincard'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className='textarea'>
                            <h1>World's Biggest</h1>
                            <h1 className="forblue">Antique Collection</h1>
                            <h5>From they fine john he give of rich he. They age and draw
                                mrs like. Improving end distruts may instantly was
                                household applauded incommode.</h5>
                            <div className="button d-flex">
                                <button className='btn'>Discover Now</button>
                                <img src={Play} alt="play" srcset="" />
                                <p>Watch Video</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 vase">
                        <img src={Vase} alt="vase" />
                    </div>
                    <div className="col-lg-3 rightSide">
                        <div className='d-flex mb-3'>
                            <div className='img-background'>  <img src={Year} alt="" /></div>
                            <div>
                                <h3>1322</h3>
                                <h6>Year</h6>
                            </div>
                        </div>
                        <div className='d-flex mb-3'>
                            <div className='img-background'>  <img src={Bid} alt="" /></div>

                            <div>
                                <h3>29</h3>
                                <h6>Bids so far</h6>
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className='img-background'>  <img src={Origin} alt="" /></div>
                            <div>
                                <h3>China</h3>
                                <h6>Origin</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="search">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="row">
                                <div className="col-sm-6 col-lg-3 d-grid px-4">
                                    <label for="cars">Location</label>
                                    <select name="cars" id="cars">
                                        <option value="volvo">Norway</option>

                                    </select>
                                </div>
                                <div className=" col-sm-6 col-lg-3 d-grid px-4">
                                    <label for="cars">Religion</label>
                                    <select name="cars" id="cars">
                                        <option value="volvo">Asatro</option>

                                    </select>
                                </div>
                                <div className="col-sm-6 col-lg-3 d-grid px-4">
                                    <label for="cars">Year</label>
                                    <select name="cars" id="cars">
                                        <option value="volvo">793 AD</option>

                                    </select>
                                </div>
                                <div className="col-sm-6 col-lg-3 d-grid px-4">
                                    <label for="cars">Type</label>
                                    <select name="cars" id="cars">
                                        <option value="volvo">Weapons</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="offset-lg-1 col-lg-2">
                            <button className='btn'>
                                <i class="fas fa-search"></i>
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainCard
