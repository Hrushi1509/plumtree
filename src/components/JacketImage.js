import React from 'react'

const JacketImage = () => {
  return (
    <div className='jacket-image'>
        <img style={{width: '100%',height:'45vw'}} src='https://c4.wallpaperflare.com/wallpaper/1020/795/619/david-gandy-brown-hair-beard-jacket-wallpaper-preview.jpg' alt="jacket image"/>

        <div className='jacket-image-text'>
            <h3 style={{marginBottom:'-20px'}}><span style={{fontWeight:'bolder', fontSize:'30px'}}>DOE</span> <span style={{fontSize:'30px', fontWeight:'500'}}>SPORTSWEAR</span></h3>
            <h2 style={{color:'white',fontWeight:'bolder', fontSize:'40px', marginBottom:'-35px', }}>ULTRA COOL JACKETS</h2>
            <h2 style={{color:'white',fontWeight:'bolder', fontSize:'40px',marginBottom:'-28px'}}>AND VESTS</h2>

            <div style={{display:'flex', alignItems:'center', gap:'30px'}}>
                <div style={{color:'white', fontWeight:'bold', fontSize:'130px'}}>20</div>
                <div style={{display:'flex', flexDirection:'column', alignItems:'center',}}>
                    <div style={{color:'orangered',fontWeight:'bold', fontSize:'40px', marginLeft:'-37px' ,marginBottom:'-10px'}}>%</div>
                    <div style={{color:'orangered',fontWeight:'bold', fontSize:'45px'}}>OFF</div>
                </div>
            </div>

            <div className='jacket-collection'>
                VIEW COLLECTION
            </div>
        </div>
    </div>
  )
}

export default JacketImage