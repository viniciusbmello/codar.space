import React from 'react'
import Head from 'next/head'
import Tilt from 'react-parallax-tilt'

import Layout from './style'

const About = () => {
  return (
    <>
      <Head>
        <title>Codar - Sobre</title>
      </Head>
      <Tilt
        tiltReverse={true}
        tiltMaxAngleY={10}
        tiltAxis={'y'}
        gyroscope={true}
        trackOnWindow={true}
      >
        <Layout>
          <h1>
            <div className='fakeClose' />
            <div className='fakeMinimize' />
            <div className='fakeZoom' />
            Sobre
          </h1>
          <p>
            Nome: Vinícius Mello <br />
            Email: viniciusbmello@gmail.com <br />
            GitHub:{' '}
            <a
              href='https://github.com/viniciusbmello/'
              style={{ textDecoration: 'none', color: 'lightgray' }}
            >
              https://github.com/viniciusbmello/
            </a>
          </p>
        </Layout>
      </Tilt>
    </>
  )
}

export default About
