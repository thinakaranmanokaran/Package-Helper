import React from 'react'
import { Tags } from '../database/CommandDatas'

const CommandItalic = ({ selectedID }) => {

  const TagLines = Tags.filter((TagLine) => TagLine.id === selectedID )

  return (
    <>
      {
        TagLines.map((TagData, index) => (
          <div key={index} className='font-consolasItalic text-2xl  text-light opacity-40'>{TagData.TagLine}</div>
        ))
      }
    </>
  )
}

export default CommandItalic