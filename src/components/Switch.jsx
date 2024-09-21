import React, { useState, useEffect } from 'react'

const Switch = () => {

  const [toggled, setToggled] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  function switchOn() {
    setToggled(!toggled);
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  }

  return (
    <div className='w-20 h-10 relative overflow-visible' >
        <div onClick={switchOn} className={`w-7 h-7 bg-dark rounded-full border-[3px] drop-shadow-lg absolute z-30 transition-all duration-300 border-light ${toggled ? 'left-0 bg-dark border-dark' : '-left-8 bg-dark border-light'} ` } ></div>
        <div className='w-10 h-2 bg-light dark:bg-dark rounded-lg absolute top-[10px] opacity-35 right-16 z-0' > </div>
    </div>
  )
}

export default Switch