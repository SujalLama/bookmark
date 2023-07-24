import React, { useState } from 'react'
import "./tabs.css";
import Button from '../Button/Button';

export const Tabs = () => {
    const [indexedContent, setIndexedContent] = useState(0);

  return (
    <section className='tabs'>
        <div className='container tabs-header'>
            <Button variant='tabs' className={`${indexedContent === 0 ? 'active' : ''}`} onClick={() => setIndexedContent(0)}>
                <span>Simple Bookmarking</span>
            </Button>
            <Button variant='tabs' className={`${indexedContent === 1 ? 'active' : ''}`} onClick={() => setIndexedContent(1)}>
                <span>Speedy Searching</span>
            </Button>
            <Button variant='tabs' className={`${indexedContent === 2 ? 'active' : ''}`} onClick={() => setIndexedContent(2)}>
                <span>Easy Sharing</span>
            </Button>
        </div>
        <div className='tabs-content'>
            <div className={`tabs-main-content ${indexedContent === 0 ? 'visible' : 'invisible'}`}>
                <div className='tabs-img'>
                    <img src="/images/illustration-features-tab-1.svg" alt="illustration features 1" />
                </div>
                <div className='tabs-inner-content-wrapper' >
                    <div className='container tabs-inner-content'>
                        <div>
                            <h2>
                                Bookmark in one click
                            </h2>
                            <p>Organize your bookmarks however you like. Our simple drag-and-drop interface
                                gives you complete control over how you manage your favourite sites.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`tabs-main-content ${indexedContent === 1 ? 'visible' : 'invisible'}`}>
                <div className='tabs-img'>
                    <img src="/images/illustration-features-tab-2.svg" alt="illustration features 2" />
                </div>
                <div className='tabs-inner-content-wrapper' >
                    <div className='container tabs-inner-content'>
                        <div>
                            <h2>
                                Bookmark in one click
                            </h2>
                            <p>Organize your bookmarks however you like. Our simple drag-and-drop interface
                                gives you complete control over how you manage your favourite sites.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`tabs-main-content ${indexedContent === 2 ? 'visible' : 'invisible'}`}>
                <div className='tabs-img'>
                    <img src="/images/illustration-features-tab-3.svg" alt="illustration features 3" />
                </div>
                <div className='tabs-inner-content-wrapper' >
                    <div className='container tabs-inner-content'>
                        <div>
                            <h2>
                                Bookmark in one click
                            </h2>
                            <p>Organize your bookmarks however you like. Our simple drag-and-drop interface
                                gives you complete control over how you manage your favourite sites.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
