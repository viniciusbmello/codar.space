import React from 'react'

import Layout from './style'
import CometSvg from '../../assets/svgs/cometSvg'

const Header = () => {
  return (
    <Layout>
      <h1>
        <CometSvg width='6rem' height='6rem' />
        <span>codar</span>.space
      </h1>
    </Layout>
  )
}

export default Header
