import React from 'react'

export default function Layout(props) {
    const { children } = props

    const header = (
        <header className=''>
            {/* <i className="fa-solid fa-kiwi-bird"></i> */}
            <img src='favicon.webp' alt='flower' />
            <h1 className='text-gradient'>Zenzen</h1>
        </header>
    )
    const footer = (
        <footer>
            <small>Created by</small>
            <a target='_blank' href='https://github.com/Nagul04/zenzen.git'>
                {/* <img src='https://avatars.githubusercontent.com/u/77163783?v=4' alt='pfp' /> */}
                <p>nagulj</p>
                <i className="fa-brands fa-github"></i>
            </a>
        </footer>
    )

    return (
        <>
            {header}
            <main>
                {children}
            </main>
            {footer}
        </>
    )
}
