import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Layout from './style'

const Header = () => {
  const router = useRouter()

  return (
    <Layout>
      <div className='header-content'>
        <h1>Logo</h1>
        <nav>
          <li className={router.pathname === '/' ? 'active' : ''}>
            <Link href='/'>
              <a>
                <span data-hover='Index'>Index</span>
              </a>
            </Link>
          </li>
          <li className={router.pathname === '/about' ? 'active' : ''}>
            <Link href='/about'>
              <a>
                <span data-hover='About'>About</span>
              </a>
            </Link>
          </li>
        </nav>
      </div>
    </Layout>
  )
}

export default Header
