import styled from 'styled-components'

const Layout = styled.div`
  position: fixed !important;
  overflow: hidden;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;

  width: 100vw;
  height: 6rem;

  z-index: 999;

  .header-content {
    margin: auto;
    width: 100%;
    max-width: 120rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  li {
    float: left;
    display: inline;
  }

  a {
    position: relative;
    display: block;
    color: white;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    padding: 2rem 5rem;
    font: 700 2rem sans-serif;
  }

  a:not(.active):hover .link-space {
    transform: translateZ(0) rotateX(90deg);
  }

  .link-space {
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    pointer-events: none;
    transition: all 0.2s ease-out;
    transform-style: preserve-3d;
    margin: 1.25rem 2.5rem;
  }

  .fare,
  .back {
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    box-sizing: border-box;
    margin: auto;
  }

  .fare {
    transform: rotateX(0deg) translateZ(1rem);
  }

  .back {
    transform: rotateX(-90deg) translateZ(1rem);
  }
`

export default Layout
