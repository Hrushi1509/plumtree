import React from 'react'
import './newstock.css'
import { icons } from '../../assets/icons/icons'
import { data } from '../../data'

const NewStock = () => {
    return (
        <div className='new-stock'>
            <div className='new-arrival-section'>
                <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                    <h4>NEW ARRIVAL</h4>
                    <div style={{display:'flex', gap:'20px'}}>
                        <span style={{cursor:'pointer'}}>{icons.left}</span>
                        <span style={{cursor:'pointer'}}>{icons.right}</span>
                    </div>
                </div>
                <div className='new-arrival'>
                    {
                        data?.map((item) => (
                            <div>
                                <img src={item.images} alt='imagess' />
                                <div className='details'>
                                    <div className='details-info'>
                                        <p>{item.text}</p>
                                        <div className="star-rating" >
                                            <span className="star">{icons.stars}</span>
                                            <span className="star">{icons.stars}</span>
                                            <span className="star">{icons.stars}</span>
                                            <span className="star">{icons.star}</span>
                                        </div>

                                        <div className='cart-like'>
                                            <div className='cart cl-dimensions'>
                                                {item.cart}
                                            </div>
                                            <div className='cart cl-dimensions like'>
                                                {item.like}
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h3>
                                            {item.price}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default NewStock