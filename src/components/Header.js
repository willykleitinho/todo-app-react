import { useState, useEffect } from 'react';

export default function Header({title}) {
  return (
    <header>
      <h1 className="title">{title}</h1>
      <ThemeToggler />
    </header>
  )
}


function ThemeToggler() {
  const [theme, setTheme] = useState('dark');

  function switchTheme(e) {
    e.preventDefault();
    setTheme((theme) => (theme === 'light') ? 'dark' : 'light');
  }

  useEffect(() => document.body.className = (theme === 'light') ? 'light-theme' : '');

  return (
    <fieldset className='theme-toggler' onClick={switchTheme}>
      <legend className='hidden'>Theme switcher</legend>
      <label className={'dark ' + ((theme === 'light') ? 'selected' : 'move')}>
        <input name='theme' type="radio" /> <span className='hidden'>Light theme</span>
      </label>
      <label className={'light ' + ((theme === 'dark') ? 'selected' : 'move')}>
        <input name='theme' type="radio" /> <span className='hidden'>Dark theme</span>
      </label>
    </fieldset>
  );
}