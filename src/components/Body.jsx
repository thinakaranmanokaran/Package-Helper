import React, { useState } from 'react'
import BoldCaption from '../components/BoldCaption'
import NormalCaption from '../components/NormalCaption'
import Console from '../components/Console'
import Select from './Select'
import LinkCaption from './LinkCaption'

const Body = () => {

  const [selectedID, setSelectedID] = useState(null);

    function showCommands(id){
        setSelectedID(id);
    }

  return (
    <main className="flex flex-col h-auto items-center">
          <Select selectedID={selectedID} showCommands={showCommands} />
        <div className='flex flex-col w-3/6 m-10 '>
          <BoldCaption selectedID={selectedID} />
          <LinkCaption selectedID={selectedID} />
          <NormalCaption selectedID={selectedID} />
        </div>
        <Console selectedID={selectedID} />
    </main>
  )
}

export default Body