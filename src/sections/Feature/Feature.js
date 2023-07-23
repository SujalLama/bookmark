import React from 'react'
import { Tabs } from '../../components/Tabs/Tabs'

export const Feature = () => {
  return (
    <section className='container'>
        <h2>Features</h2>
        <p>Our aim is to make quick and easy for you to access your favourite websites. 
            Your bookmarks sync between your devices so you can can access them on the go. 
        </p>

        <Tabs />
    </section>
  )
}
