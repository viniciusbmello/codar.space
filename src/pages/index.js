import React from 'react'
import Head from 'next/head'
import Tilt from 'react-parallax-tilt'

import Layout from './style'

const Index = () => {
  return (
    <>
      <Head>
        <title>Codar.Space</title>
      </Head>
      <Tilt
        tiltReverse={true}
        tiltMaxAngleY={10}
        tiltAxis={'y'}
        glareEnable={true}
        glareMaxOpacity={0.1}
        glareColor='black'
        glarePosition='all'
        gyroscope={true}
        trackOnWindow={true}
      >
        <Layout>
          <h1>{'>_ '}Lorem Ipsum</h1>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non
            finibus lacus, eget faucibus metus. Nam rhoncus accumsan risus, quis
            eleifend risus auctor euismod. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos.
          </p>
        </Layout>
      </Tilt>
    </>
  )
}

export default Index
