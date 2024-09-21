import React from 'react'
import { BoldCaptionDatas } from '../database/CaptionDatas'
import { Commands } from '../database/CommandDatas'

const BoldCaption = ({ selectedID }) => {

  const selectedBoldCaption = BoldCaptionDatas.filter((Caption) => Caption.id === selectedID )

  return (
    <>
      {
        selectedBoldCaption.map((CapData, index) => (
          <div key={index} className='text-light dark:text-dark font-creatoBold text-2xl'>
            {CapData.Caption}
          </div>
        ))
      }
    </>
  )
}

export default BoldCaption
