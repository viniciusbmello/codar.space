import React, { useState, useEffect } from 'react'
import Parallax from 'parallax-js'
import Particles from 'react-particles-js'

import Layout from './style'

const ParticleComponent = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') return
    const scene = document.getElementById('scene')
    const parallaxInstance = new Parallax(scene)

    parallaxInstance.enable()

    return () => parallaxInstance.disable()
  }, [])

  return (
    <Layout id='scene'>
      <div data-depth={0.2}>
        <Particles
          width='100vw'
          height='100vh'
          params={{
            particles: {
              number: {
                value: 100,
                density: { enable: true, value_area: 1000 }
              },
              lineLinked: { enable: false },
              move: { speed: 0.5 },
              size: {
                value: 2,
                random: true,
                anim: {
                  enable: false,
                  size_min: 0.2
                }
              }
            },
            interactivity: {
              detect_on: 'window',
              events: {
                onhover: { enable: true, mode: 'grab' },
                resize: true
              },
              modes: {
                grab: {
                  distance: 200,
                  radius: 200,
                  links: { opacity: 0.2 }
                }
              }
            },
            retina_detect: true
          }}
        />
      </div>
    </Layout>
  )
}

export default ParticleComponent
