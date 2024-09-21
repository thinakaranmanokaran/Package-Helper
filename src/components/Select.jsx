import React, { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import SelectionDatas from '../database/SelectionDatas';

const Select = ({ showCommands }) => {

    const [showOption, setShowOption] = useState(false);

    function showData(){
        setShowOption(!showOption);
    }

    const SelectionData = ({ showCommands }) => {
        return(
            <>
                {
                    SelectionDatas.map((select, index) => (
                        <div key={index} className='bg-light dark:bg-dark py-2 w-36 px-3'>
                            <div key={index} onClick={() => showCommands(select.id)} className='text-dark dark:text-light font-creatoBold text-lg mb-1'>
                                {select.selectionData}
                            </div>
                        </div>
                    ))
                }
            </>
        )
    }

  return (
    <>
        <div className='bg-light dark:bg-dark rounded-lg mt-6 py-2 w-36 px-3 flex items-center justify-between'>
            <div className='text-dark dark:text-light font-creatoBold text-lg' >Select</div>
            <FaChevronDown className='fill-dark dark:fill-light' onClick={showData} />
        </div>
        <div className='rounded-lg mt-3' >
            {showOption && <SelectionData showCommands={showCommands} />}
        </div>

    </>
  )
}

export default Select