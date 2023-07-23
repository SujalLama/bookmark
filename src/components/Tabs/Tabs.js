import React from 'react'
import "./tabs.css";

export const Tabs = () => {
  return (
    <section className='tabs'>
        <div className='tabs-header'>
            <h3>Simple Bookmarking</h3>
            <h3>Speedy Searching</h3>
            <h3>Easy Sharing</h3>
        </div>
        <div className='tabs-content'>
            <div>
                <img src="/images/illustration-features-tab-1.svg" alt="illustration features 1" />
                <div>
                    <h2>Bookmark in one click</h2>
                    <p>Organize your bookmarks however you like. Our simple drag-and-drop interface
                        gives you complete control over how you manage your favourite sites.
                    </p>
                </div>
            </div>
            <div>
                <img src="/images/illustration-features-tab-2.svg" alt="illustration features 2" />
                <div>
                    <h2>Bookmark in one click</h2>
                    <p>Organize your bookmarks however you like. Our simple drag-and-drop interface
                        gives you complete control over how you manage your favourite sites.
                    </p>
                </div>
            </div>
            <div>
                <img src="/images/illustration-features-tab-3.svg" alt="illustration features 3" />
                <div>
                    <h2>Bookmark in one click</h2>
                    <p>Organize your bookmarks however you like. Our simple drag-and-drop interface
                        gives you complete control over how you manage your favourite sites.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}
