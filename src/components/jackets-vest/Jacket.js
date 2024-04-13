import React from 'react'
import './jacket.css'

const Jacket = () => {
  return (
    <div className='jacket-unisex-running'>
        <div style={{position:'relative',height:'300px', width:'450px',cursor:'pointer'}}>
            <img style={{height:'100%', width:'100%', objectFit:'cover'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKFlHtgBUf3FFaYy-xSlwhaa43SH5zsIgIwxePGOqHVvz-xxmdEJ-sXRaU4OY8W3pKO90&usqp=CAU' alt='jacket image'/>
            <div className='text-on-image'>
                <h4 style={{fontWeight:'bold', fontSize:'28px',marginBottom:'-39px'}}>UNISEX JACKETS</h4>
                <h6 style={{fontWeight:'500', fontSize:'20px', color:'gray', marginLeft:'-25px'}}>WINDPROOF & SHOWERPROOF</h6>
                <div className='shop-now'>
                    SHOP NOW
                </div>
            </div>
        </div>
        <div style={{position:'relative',height:'300px', width:'730px',cursor:'pointer'}}>
            <img style={{height:'100%', width:'100%', objectFit:'cover'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn_039UdlDETYlN67oqF8DvSNt3-bj6FGCsA&s' alt='running jacket'/>
            <div className='text-on-image-running-jacket'>
                <h4 style={{fontWeight:'bold', fontSize:'28px',marginBottom:'-39px'}}>RUNNING JACKETS</h4>
                <h6 style={{fontWeight:'500', fontSize:'20px', color:'gray',}}>CONTRAST SIDE PANELLING</h6>
                <div className='shop-now'>
                    SHOP NOW
                </div>
            </div>
        </div>
    </div>
  )
}

export default Jacket