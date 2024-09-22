import React from 'react'
import { LinkCaptionDatas } from '../database/CaptionDatas'

const LinkCaption = ({ selectedID }) => {

    const selectedLinkCaption = LinkCaptionDatas.filter((Caption) => Caption.id === selectedID )

  return (
    <>
     {
        selectedLinkCaption.map((LinkData, index) => (
            <div className='text-light dark:text-dark font-creatoBold  opacity-40 text-2xl'>
                {LinkData.Caption}
            </div>
        ))
     } 
    </>
  )
}

export default LinkCaption
