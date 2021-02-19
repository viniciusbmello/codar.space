import React, { useRef, useEffect } from 'react'
import Parallax from 'parallax-js'
import Particles from 'react-particles-js'

import Layout from './style'

const ParticleBg = (props) => {
  const ref = useRef(null)

  useEffect(() => {
    const parallaxInstance = new Parallax(ref.current)
    parallaxInstance.enable()
    return () => parallaxInstance.disable()
  }, [])

  return (
    <Layout ref={ref}>
      <div data-depth={0.4}>
        <Particles
          width={props.width}
          height={props.height}
          params={{
            particles: {
              number: {
                value: 100,
                density: { enable: true, value_area: 4000 }
              },
              lineLinked: { enable: false },
              move: { speed: 0.3 },
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
                onhover: { enable: true, mode: 'connect' },
                resize: true
              },
              modes: {
                connect: {
                  distance: 200,
                  radius: 240,
                  links: { opacity: 0.05 }
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

export default ParticleBg
