import React from 'react'
import "../assets/scss/ThirdCard.scss"
import FeedBack from "../assets/images/feedback.png"
import Star from "../assets/images/star.png"
import Profile from "../assets/images/profile.png"


function ThirdCard() {
    return (
        <div className='thirdCard'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 ">
                        <img src={FeedBack} alt="" srcset="" />
                    </div>
                    <div className="col-lg-6 offset-lg-2">
                        <h1>Buyer's Feedback</h1>
                        <h2>Whoe front da of piate heard ah ought. His defective
                            nor convinced residense won. Conenction has put
                            impossible own apartments boisterous.</h2>
                        <div className="profile">
                            <div className='profileImg'>
                                <img src={Profile} alt="" />
                            </div>
                            <div>
                                <h5>Selena Hakim</h5>
                                <p>UI Designer</p>
                                <div className='d-flex star'>
                                    <img src={Star} alt="" />
                                    <img src={Star} alt="" />
                                    <img src={Star} alt="" />
                                    <img src={Star} alt="" />
                                    <img src={Star} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThirdCard
