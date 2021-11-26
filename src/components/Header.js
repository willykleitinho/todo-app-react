
function toggleTheme() {
  if (document.body.className) {
    document.body.className = '';
    window.localStorage.setItem('theme', 'dark');
  } else {
    document.body.className = 'light-theme';
    window.localStorage.setItem('theme', 'light');
  }
}

export default function Header({title}) {
  return (
    <header>
      <h1 className="title">{title}</h1>
      <button className="toggler" onClick={toggleTheme}>
        <span className="hidden">Change app theme</span>
      </button>
    </header>
  )
}