import React from 'react'
import "./footer.css";


export default function Footer() {
  return (
    <footer className='footer'>
        <div className='container'>
            <img src="/images/logo-bookmark.svg" alt="bookmark logo" />
            <nav>
                <a href="#">Features</a>
                <a href="#">Pricing</a>
                <a href="#">Contact</a>
            </nav>
            <ul className='social-media'>
                <li>
                    <a href="#">
                        <img src="/images/icon-facebook.svg" alt="facebook" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="/images/icon-twitter.svg" alt="twitter" />
                    </a>
                </li>
            </ul>
        </div>
    </footer>
  )
}
