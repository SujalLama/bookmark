import React from 'react'
import { Tabs } from '../../components/Tabs/Tabs'
import "./feature.css";

export const Feature = () => {
  return (
    <section id="content" className='feature'>
      <div className='container'>
        <header className='feature-header'>
          <h2>Features</h2>
          <p>Our aim is to make quick and easy for you to access your favourite websites. 
              Your bookmarks sync between your devices so you can can access them on the go. 
          </p>
        </header>
      </div>

        <Tabs />
    </section>
  )
}
