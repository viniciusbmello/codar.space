import React from 'react'
import Head from 'next/head'

import Layout from './style'

const Index = () => {
  return (
    <>
      <Head>
        <title>Codar.Space</title>
      </Head>
      <Layout>
        <div className='Bg-DarkGlass' />
        <h1>Index</h1>
      </Layout>
    </>
  )
}

export default Index
