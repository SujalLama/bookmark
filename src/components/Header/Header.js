import React, { useState } from 'react'
import "./header.css";
import Button from '../Button/Button';

export default function Header() {
  const [active, setActive] = useState(false);

  const toggleHam = () => {
    const root = document.getElementById("root");
    
    if(active) {
      root.classList.remove('overflow-y-hidden');
    } else {
      root.classList.add('overflow-y-hidden');
    }

    setActive(!active);
  }

  return (
    <header className='header container'>
        <div className='header-logo'>
          <img src="/images/logo-bookmark.svg" alt="bookmark logo" />
        </div>
        <div className={`ham-menu ${active ? 'active' : ''}`} onClick={toggleHam}>
            <span></span>
            <span></span>
            <span></span>
        </div>

        <nav className={`header-nav ${active ? 'active' : ''}`}>
            <a className='nav-link' href='#features'>Features</a>
            <a className='nav-link' href='#pricing'>Pricing</a>
            <a className='nav-link' href='#contact'>Contact</a>
            <div className='nav-link'>
              <Button variant="nav" className="w-full">
                Login
              </Button>
            </div>
        </nav>
    </header>
  )
}
