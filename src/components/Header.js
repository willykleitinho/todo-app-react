

export default function Header({title}) {
  return (
    <header>
      <h1 className="title">{title}</h1>
      <button className="toggler" /* onClick={} */>
        <span className="hidden">Change app theme</span>
      </button>
    </header>
  )
}