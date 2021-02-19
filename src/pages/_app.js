import React from 'react'
import Router from 'next/router'
import NProgress from 'nprogress'

import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/global'
import NProgressStyle from '../styles/nprogress'
import theme from '../styles/theme'

import Header from '../components/header'
import ParticlesBg from '../components/particlesBg'

Router.events.on('routeChangeStart', (url) => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <NProgressStyle />
      <Header />
      <ParticlesBg width='120vw' height='120vh' />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
