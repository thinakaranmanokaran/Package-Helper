import React, { useState } from 'react';
import Command from './Command';
import CommandItalic from './CommandItalic';
import CopyCommand from './CopyCommand';

const Console = ({ selectedID }) => {
  const [commandText, setCommandText] = useState('');

  console.log("Selected ID in Console:", selectedID); 

  if(!selectedID) return null;

  return (
    <>
      <div className='bg-light w-2/4 bg-opacity-10 backdrop-blur-lg rounded-3xl'>
        <div className='w-full h-16 bg-light bg-opacity-15 rounded-t-3xl flex items-center justify-end pr-6'>
          <div className='w-4 h-4 bg-light rounded-full mr-1.5 opacity-40'></div>
          <div className='w-4 h-4 bg-light rounded-full mr-1.5 opacity-70'></div>
          <div className='w-4 h-4 bg-light rounded-full mr-1.5'></div>
        </div>
        <div className='m-6'>
          <CommandItalic selectedID={selectedID} />
          <Command selectedID={selectedID} setCommandText={setCommandText} />
        </div>
        <CopyCommand className='absolute bottom-8 right-8' textToCopy={commandText} />
      </div>
    </>
  );
};

export default Console;
