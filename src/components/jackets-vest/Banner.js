import React from 'react'
import './banner.css'

const Banner = () => {
    return (
        <div className='banner'>
            <div className='background'>
                <img style={{ height: '200px', width: '100%', objectFit: 'cover' }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoaXKxi0prmwrTZCUFY_VIBm04Xc3Mmutwvw&s' alt='imagess' />
                <div className='banners'>
                    <div className='banner-body'>
                        <div>
                            <div className='banner-offers'>
                                <div className='banner-signup'>
                                    <div className='signup'>SIGN UP</div>
                                    <div className='banner-get'>& GET</div>
                                </div>
                                <div className='banner-offer'>
                                    <div style={{ color: 'white', fontWeight: 'bold', fontSize: '80px' }}>20</div>
                                    <div>
                                        <div style={{ color: 'rgb(228, 193, 193)', fontWeight: 'bold', fontSize: '40px', marginLeft: '0px', marginBottom: '-20px' }}>%</div>
                                        <div style={{ color: 'rgb(228, 193, 193)', fontWeight: 'bold', fontSize: '40px' }}>OFF</div>
                                    </div>
                                </div>
                            </div>
                            <p className='para'>Be the first to know about the latest fashion and get exclusive offers</p>
                        </div>

                        <div className='input-button'>
                            <div className='dimension'>
                                <input type='text' placeholder='Enter Email Address' />
                            </div>
                            <button className='btn dimension'>SIGN UP</button>
                        </div>

                    </div>

                </div>
            </div>




        </div>
    )
}

export default Banner