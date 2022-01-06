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
            </div>
        </div>
    )
}

export default Categories
