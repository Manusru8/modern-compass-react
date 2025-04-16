function Header() {
  return (
    <header style={{
      backgroundColor: '#0F1A25',
      padding: '1rem',
      color: 'white'
    }}>
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
          Modern Compass
        </div>
        <ul style={{
          display: 'flex',
          listStyle: 'none',
          gap: '2rem',
          margin: 0,
          padding: 0
        }}>
          <li><a href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</a></li>
          <li><a href="/about" style={{ color: 'white', textDecoration: 'none' }}>About</a></li>
          <li><a href="/blog" style={{ color: 'white', textDecoration: 'none' }}>Blog</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;