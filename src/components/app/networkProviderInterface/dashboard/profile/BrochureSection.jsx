import React from 'react'
import { Brochure } from '../../../../../assets/export'
import Button from '../../../landingPage/Inputs/Button'

const BrochureSection = () => {
        // Example using qrcodejs

  return (
    <div>
        <img src={Brochure} alt="" />
        
        <div className='mt-4'>
            <Button  text={'Download brochure'} />
        </div>
    </div>
  )
}

export default BrochureSection