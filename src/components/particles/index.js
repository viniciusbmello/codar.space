import React from 'react'
import { useSpring, animated } from 'react-spring'
import Particles from 'react-particles-js'

import Layout from './style'

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const translate = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`

const ParticleComponent = () => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 }
  }))
  return (
    <Layout>
      <animated.div
        style={{
          transform: props.xy.interpolate(translate),
          zIndex: -1
        }}
        onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
      >
        <Particles
          width='100vw'
          height='100vh'
          params={{
            particles: {
              number: {
                value: 100,
                density: { enable: true, value_area: 1500 }
              },
              lineLinked: { enable: false },
              move: { speed: 0.3 },
              size: {
                value: 3,
                random: true,
                anim: {
                  enable: false,
                  size_min: 0.1
                }
              }
            },
            interactivity: {
              detect_on: 'window',
              events: { onhover: { enable: true, mode: 'connect' } },
              modes: {
                connect: {
                  distance: 200,
                  radius: 200,
                  links: { opacity: 0.1 }
                }
              }
            },
            retina_detect: true
          }}
        />
      </animated.div>
    </Layout>
  )
}

export default ParticleComponent
