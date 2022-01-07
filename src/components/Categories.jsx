import React from 'react'
import "../assets/scss/Categories.scss"
import Statue from "../assets/images/statue.png"
import Skull from "../assets/images/skull.png"
import Chair from "../assets/images/chair.png"

function Categories() {
    return (
        <div className='categories'>
            <div className="container">
                <div className="d-flex justify-content-between">
                    <div>
                        <h1 className='title'>Top Categories</h1>
                    </div>

                    <div className="back-forward">
                        <i class="fas fa-arrow-circle-left"></i>
                        <i class="fas fa-arrow-circle-right "></i>
                    </div>
                </div>
                <p className='category-info'>Party we years to order allow asked of. We so opiniıo firends me message as delight. </p>
                <div className="big">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="row">
                                <div className="col-lg-5">
                                    <div className='category-card'>
                                        <div className="numbers">
                                            <h4>122</h4>
                                        </div>
                                        <h5>Weapons</h5>
                                        <h6>Worefall</h6>
                                        <img src={Skull} alt="" srcset="" />
                                    </div>
                                    <div className='category-card'>
                                        <div className="numbers">
                                            <h4>71</h4>
                                        </div>
                                        <h5>Skulls</h5>
                                        <h6>Worefall</h6>
                                        <img src={Skull} alt="" srcset="" />
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className='category-card big-one'>
                                        <div className="numbers">
                                            <h4>35</h4>
                                        </div>
                                        <h5>Statues</h5>
                                        <h6>Worefall</h6>
                                        <img src={Statue} alt="" srcset="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className='category-card'>
                                <div className="numbers">
                                    <h4>413</h4>
                                </div>
                                <h5>Keep</h5>
                                <h6>Worefall</h6>
                                <img src={Chair} alt="" srcset="" />
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className='category-card'>
                                        <div className="numbers">
                                            <h4>98</h4>
                                        </div>
                                        <h5>Watches</h5>
                                        <h6>Worefall</h6>
                                        <img src={Chair} alt="" srcset="" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className='category-card'>
                                        <div className="numbers">
                                            <h4>812</h4>
                                        </div>
                                        <h5>Furniture</h5>
                                        <h6>Worefall</h6>
                                        <img src={Chair} alt="" srcset="" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="small">
                    <div id="carouselExampleControls1" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div className='category-card'>
                                    <div className="numbers">
                                        <h4>122</h4>
                                    </div>
                                    <h5>Weapons</h5>
                                    <h6>Worefall</h6>
                                    <img src={Skull} alt="" srcset="" />
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div className='category-card'>
                                    <div className="numbers">
                                        <h4>71</h4>
                                    </div>
                                    <h5>Skulls</h5>
                                    <h6>Worefall</h6>
                                    <img src={Skull} alt="" srcset="" />
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div className='category-card big-one'>
                                    <div className="numbers">
                                        <h4>35</h4>
                                    </div>
                                    <h5>Statues</h5>
                                    <h6>Worefall</h6>
                                    <img src={Statue} alt="" srcset="" />
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div className='category-card'>
                                    <div className="numbers">
                                        <h4>413</h4>
                                    </div>
                                    <h5>Keep</h5>
                                    <h6>Worefall</h6>
                                    <img src={Chair} alt="" srcset="" />
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div className='category-card'>
                                    <div className="numbers">
                                        <h4>98</h4>
                                    </div>
                                    <h5>Watches</h5>
                                    <h6>Worefall</h6>
                                    <img src={Chair} alt="" srcset="" />
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div className='category-card'>
                                    <div className="numbers">
                                        <h4>812</h4>
                                    </div>
                                    <h5>Furniture</h5>
                                    <h6>Worefall</h6>
                                    <img src={Chair} alt="" srcset="" />
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories
