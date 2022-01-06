import React from 'react'
import '../assets/scss/Subscribe.scss'
import Music from '../assets/images/music.png'
import Send from "../assets/images/send.png"

function Subscribe() {
    return (
        <div className='subscribe'>
            <div className="container">
                <div className="main">

                    <div className="leftSide">
                        <h2>
                            Subscribe our newsletter
                        </h2>
                        <div className='col-lg-5'>
                            <h6 >
                                Reciev latest news, update, and many other things
                                every week.
                            </h6>
                        </div>
                        <div className='input-body'>
                            <input type="text" placeholder='Enter Your email address' />
                            <button className='btn' > <img src={Send} alt="" /></button>
                        </div>

                    </div>
                    <div className="music">
                        <img src={Music} alt="" />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Subscribe
