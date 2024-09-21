import React from 'react'
import CopyCommand from './CopyCommand'
import { Commands } from '../database/CommandDatas'

const Command = ({ selectedID, setCommandText }) => {

  const CommandLine = Commands.filter((Command) => Command.id === selectedID )

  React.useEffect(() => {
    if (CommandLine.length > 0) {
      const commandText = CommandLine.map((cmd) => cmd.Command).join('\n');
      setCommandText(commandText);
    }
  }, [selectedID, CommandLine, setCommandText]);

  return (
    <>
        {
          CommandLine.map((CommandData, index) => (
            <div key={index} className='font-consolas  text-2xl text-light opacity-70 '>{CommandData.Command}</div>
          ))
        }
    </>
  )
}

export default Command