import React from 'react'
import Link from 'next/link'

import Layout from './style'

const Header = () => {
  return (
    <Layout>
      <div className='header-content'>
        <h1>Logo</h1>
        <nav>
          <li>
            <Link href='/'>
              <a>
                <span className='link-space'>
                  <span className='fare'>Index</span>
                  <span className='back'>Index</span>
                </span>
              </a>
            </Link>
          </li>
          <li>
            <Link href='/about'>
              <a>
                <span className='link-space'>
                  <span className='fare'>About</span>
                  <span className='back'>About</span>
                </span>
              </a>
            </Link>
          </li>
        </nav>
      </div>
    </Layout>
  )
}

export default Header
