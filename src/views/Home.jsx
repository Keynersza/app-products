import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div style={{ background: 'azure', width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ width: '100%', display: 'flex', gap: '20px', justifyContent: 'center' }}>
        <Link  to={'/login'} style={{ cursor: 'pointer', textDecoration:'none', border: 'none', fontSize: '20px', padding: '20px' }}>
          Sign In
        </Link>
        <button style={{ cursor: 'pointer', border: 'none', fontSize: '20px', padding: '20px' }}>
          Sign Up
        </button>
      </div>


    </div>
  )
}

export default Home