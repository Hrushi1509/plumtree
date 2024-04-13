import React from 'react'
import { icons } from '../assets/icons/icons'

const Footer = () => {
    return (
        <div className='footer-section'>
            <div className='footer'>
                <div>
                    <div>
                        <h3>COSTOMER CARE</h3>
                        <div>
                            <p>Shipping Details</p>
                            <p>Return Policy</p>
                            <p>Privacy Policy</p>
                            <p>Terms & Conditions</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <h3>MY ACCOUNT</h3>
                        <div>
                            <p>Sign In</p>
                            <p>View Chart</p>
                            <p>My Wishlist</p>
                            <p>FAQ</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <h3>CONTACT US</h3>
                        <div>
                            <p>2400 E. Katella Ave., Suite</p>
                            <p>800, Anaheim, CA, 92806,</p>
                            <p>United States.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div style={{display:'flex', flexDirection:'column', gap:'20px' ,marginTop:'15px', alignItems:'center', justifyContent:'center'}}>
                        <div style={{display:'flex', alignItems:'center', justifyContent:'center',gap:'70px'}}>
                            <div>{icons.call}</div>
                            <div >+ 1773-492-0786</div>
                        </div>
                        <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                            <div>{icons.mail}</div>
                            <div style={{marginLeft:'10px'}}>care@doesportswear.com</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='copyright'>
            <hr style={{color:"white", height:'1px', width:'100%', }}/>
                <h4>COPYRIGHT @ 2018 DOE SPORTS WEAR | MADE IN USA</h4>
            </div>
        </div>
    )
}

export default Footer