import React from 'react'
import Jacket from './jackets-vest/Jacket'
import NewStock from './jackets-vest/NewStock'
import Vest from './jackets-vest/Vest'
import Banner from './jackets-vest/Banner'

const Jackets = () => {
  return (
    <div className='jacket-vest'>
        <Jacket/>
        <NewStock/>
        <Vest/>
        <Banner/>
    </div>
  )
}

export default Jackets