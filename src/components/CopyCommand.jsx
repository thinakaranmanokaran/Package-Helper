import React, { useState } from 'react';
import { FaRegCopy, FaCopy } from 'react-icons/fa6';

const CopyCommand = ({ className, textToCopy }) => {
  const [copyStatus, setCopyStatus] = useState('copy');

  const handleCopyText = () => {
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        setCopyStatus('copied!'); 
        setTimeout(() => {
          setCopyStatus('copy');
        }, 3000);
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };

  return (
    <label className={className}>
      {copyStatus === 'copy' ? (
        <FaRegCopy
          className="hover:opacity-70 fill-light opacity-40 peer size-6 cursor-pointer"
          onClick={handleCopyText}
        />
      ) : (
        <FaCopy className="fill-light size-6 cursor-pointer" />
      )}
    </label>
  );
};

export default CopyCommand;
