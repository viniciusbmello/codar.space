import React from 'react'
import Head from 'next/head'

import Layout from './style'

const Index = () => {
  return (
    <>
      <Head>
        <title>codar.space</title>
      </Head>
      <Layout>
        <div className='wrapper'>
          <span className='firstLine'>
            <h1>
              <span>Olá!</span> Meu nome é
            </h1>
          </span>
          <span className='secondLine'>
            <h1>Vinícius Mello</h1>
          </span>
          <span className='alignRight'>
            <span className='thirdLine'>
              <h1>Seja bem-vindo à</h1>
            </span>
            <span className='forthLine'>
              <h1>
                <span>codar</span>.space
              </h1>
            </span>
          </span>
          <p>
            Desenvolvimento de sites modernos. <br />
            Feito de forma personalizada para levar <br />
            toda a sua identidade para a Web.
          </p>
          <div className='buttonContainer'>
            <a href='#'>Entre em Contato!</a>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Index
