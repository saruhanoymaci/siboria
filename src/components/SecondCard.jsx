import React from 'react'
import "../assets/scss/SecondCard.scss"
import Table from "../assets/images/table.png"
import Skull from "../assets/images/skull.png"
import Chair from "../assets/images/chair.png"

function SecondCard() {
    return (
        <div className='secondCard'>
            <div className="container">
                <div className="added">
                    <div className='title'><h1>Recently Added</h1></div>

                    <div className="back-forward">
                        <i class="fas fa-arrow-circle-left"></i>
                        <i class="fas fa-arrow-circle-right "></i>
                    </div>
                </div>
                <p className='content'>Not thoughts all exercise biessing. Indulgence way everything joy alteration boisterous the attachment.</p>
                <div className="bigScreen">
                    <div className="row">
                        <div className="col-lg-4">
                            <div class="card mb-3">
                                <div className='card-image'>
                                    <img src={Skull} alt="..." /></div>
                                <div class="card-body">
                                    <h5 class="card-title">You bed any for travelling</h5>
                                    <h6>Year: 1192 | Weapons</h6>
                                    <div className='d-flex justify-content-between'>
                                        <p className="card-text dolar">$895.50</p>
                                        <button className='btn btn-outline-primary'>View Details</button>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <p className="card-text"><small>14 bids do far</small></p>
                                        <p className='card-text'><small class="text-muted">Bidding closes in 12 Days</small> </p>
                                    </div>
                                </div>
                            </div></div>
                        <div className="col-lg-4"><div class="card mb-3">
                            <div className='card-image'><img src={Table} alt="..." /></div>
                            <div class="card-body">
                                <h5 class="card-title">You bed any for travelling</h5>
                                <h6>Year: 1192 | Weapons</h6>
                                <div className='d-flex justify-content-between'>
                                    <p className="card-text dolar">$759</p>
                                    <button className='btn btn-outline-primary'>View Details</button>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <p className="card-text"><small>14 bids do far</small></p>
                                    <p className='card-text'><small class="text-muted">Bidding closes in 12 Days</small></p>
                                </div>
                            </div>
                        </div></div>
                        <div className="col-lg-4"><div class="card mb-3">
                            <div className='card-image'><img src={Chair} alt="..." /></div>
                            <div class="card-body">
                                <h5 class="card-title">You bed any for travelling</h5>
                                <h6>Year: 1192 | Weapons</h6>
                                <div className='d-flex justify-content-between'>
                                    <p className="card-text dolar">$759</p>
                                    <button className='btn btn-outline-primary'>View Details</button>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <p className="card-text"><small>14 bids do far</small></p>
                                    <p className='card-text'><small class="text-muted">Bidding closes in 12 Days</small></p>
                                </div>
                            </div>
                        </div></div>
                    </div>
                </div>
                <div className="smallScreen">

                </div>
            </div>

        </div >
    )
}

export default SecondCard
