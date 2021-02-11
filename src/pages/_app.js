import React from 'react'
import Router from 'next/router'
import NProgress from 'nprogress'

import ParticleComponent from '../components/particles'

import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

Router.events.on('routeChangeStart', (url) => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div id='wrapper'>
        <Component {...pageProps} />
      </div>
      <ParticleComponent />
    </ThemeProvider>
  )
}

export default App
