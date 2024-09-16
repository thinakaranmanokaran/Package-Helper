import React from 'react'
import { NormalCaptionDatas } from './../database/CaptionDatas';

const BoldCaption = ({ selectedID }) => {

  const selectedNormalCaption = NormalCaptionDatas.filter((Caption) => Caption.id === selectedID )

  return (
    <>
      {
        selectedNormalCaption.map((CapData, index) => (
          <div key={index} className='text-light font-creatoBold mt-3 opacity-40 text-2xl'>
            {CapData.Caption}
          </div>
        ))
      }
    </>
  )
}

export default BoldCaption
