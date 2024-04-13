import React from 'react'
import './vest.css'

const Vest = () => {
  return (
    <div className='jacket-unisex-running'>
        <div style={{position:'relative',height:'300px', width:'730px',cursor:'pointer'}}>
            <img style={{height:'100%', width:'100%', objectFit:'cover'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpY78NItvhHqia-Nobn9C2xK8meU6bgd9S6Q&s' alt='jacket image'/>
            <div className='text-on-image'>
                <h4 style={{fontWeight:'bold', fontSize:'28px',marginBottom:'-39px', marginLeft:'-130px'}}>CONTRAST VEST</h4>
                <h6 style={{fontWeight:'500', fontSize:'20px', color:'gray', marginLeft:'-130px'}}>CONTRAST SIDE PANELLING</h6>
                <div className='shop-now shop' >
                    SHOP NOW
                </div>
            </div>
        </div>
        <div style={{position:'relative',height:'300px', width:'450px',cursor:'pointer'}}>
            <img style={{height:'100%', width:'100%', objectFit:'cover'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6a5ctcOwluq2sT8zsRDI6W5HKZg42BTNMzA&s' alt='running jacket'/>
            <div className='text-on-image-running-jacket' style={{marginLeft:'100px'}}>
                <h4 style={{fontWeight:'bold', fontSize:'38px',marginBottom:'-39px', marginTop:'10px',marginLeft:'-40px'}}>LONG SLEEVE</h4>
                <h6 style={{fontWeight:'500', fontSize:'30px', color:'white', marginTop:"40px", marginLeft:'9px'}}>BASE LAYER</h6>
                <h6 style={{fontWeight:'500', fontSize:'20px', color:'gray', marginTop:'-60px' , marginLeft:'-70px'}}>COOLFIT PERFORMANCE FABRIC</h6>
                <div className='shop-now shop-now-right' style={{marginTop: '-30px'}}>
                    SHOP NOW
                </div>
            </div>
        </div>
    </div>
  )
}

export default Vest