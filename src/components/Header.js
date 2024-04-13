import React from 'react'
import { icons } from '../assets/icons/icons'


const Header = () => {
    return (
        <div className='header'>
            <div className='header-left'>
                <div>FREE SHOPPING & FREE RETURNS</div>
                <div >
                    <span className='icons'>{icons.facebook}</span>
                    <span  className='icons'>
                        {icons.twitter}
                    </span>
                    <span className='icons'>
                        {icons.google}
                    </span>
                </div>
            </div>
            <div className='header-right'>
                <div className='logo'>
                    <img style={{height:"55px", width:'65px', cursor:'pointer'}} src='https://doeofficial.com/cdn/shop/files/DOEOFFICIAL-LOGO-BLK.png?v=1684199439' alt="deo logo"/>
                </div>
                <div className='header-middle'>
                    <div>MEN</div>
                    <div>WOMEN</div>
                    <div>ACCESSORIES</div>
                </div>
                <div className='header-profile'>
                    <div style={{position:'relative'}}>
                        <input style={{paddingRight:'10px', height:'30px',}} type='text' placeholder='Search'/>
                        <span style={{position:'absolute', left:'165px', top:'8px',}}>{icons.search}</span>
                    </div>
                    <div className='cart-value'>
                        <div style={{backgroundColor:'rgb(250, 233, 233)', textAlign:'center', padding:'2px'}}>
                            {icons.cart}
                        </div>
                        <div style={{backgroundColor:'white', textAlign:'center', padding:'2px',}}>
                            0 &nbsp;
                        </div>
                    </div>
                    <div style={{backgroundColor:'rgb(211, 211, 211)', padding:'2px'}}>
                        {icons.profile}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header