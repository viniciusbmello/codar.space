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
        glareMaxOpacity={0.25}
        glareColor='black'
        glarePosition='all'
        gyroscope={true}
        trackOnWindow={true}
      >
        <Layout>
          <h1>{'>_ '}Início</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non
            finibus lacus, eget faucibus metus. Nam rhoncus accumsan risus, quis
            eleifend risus auctor euismod. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos.
            Suspendisse aliquet metus mi, at cursus lorem efficitur commodo.
            Donec nibh leo, dictum in turpis non, dictum sagittis neque. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Nunc vestibulum
            metus molestie, pulvinar erat varius, condimentum est. Integer et
            arcu in eros finibus fringilla ut eget nisi. Praesent ligula nisi,
            euismod a arcu nec, tincidunt auctor augue.
          </p>
        </Layout>
      </Tilt>
    </>
  )
}

export default Index
