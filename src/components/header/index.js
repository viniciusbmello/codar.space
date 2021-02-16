import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Layout from './style'

const Header = () => {
  const router = useRouter()

  return (
    <Layout>
      <div className='header-content'>
        <h1>
          <strong>codar</strong>.space
        </h1>
        <nav>
          <ul>
            <li className={router.pathname === '/' ? 'active' : ''}>
              <Link href='/'>
                <a>
                  <span data-hover='início'>início</span>
                </a>
              </Link>
            </li>
            <li className={router.pathname === '/about' ? 'active' : ''}>
              <Link href='/about'>
                <a>
                  <span data-hover='sobre'>sobre</span>
                </a>
              </Link>
            </li>
            <li className={router.pathname === '/contact' ? 'active' : ''}>
              <Link href='/contact'>
                <a>
                  <span data-hover='contato'>contato</span>
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </Layout>
  )
}

export default Header
