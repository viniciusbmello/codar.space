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
    display: flex;
    align-items: center;
    justify-content: center;

    float: left;
    width: 10rem;
    height: 3rem;
  }

  a {
    display: inline-block;
    text-decoration: none;
    text-transform: uppercase;
    font: 400 2rem sans-serif;
    color: white;
    overflow: hidden;
  }

  a span {
    display: inline-block;
    position: relative;
    transition: all 0.2s linear;
  }

  a span:after {
    content: attr(data-hover);
    position: absolute;
    top: -2rem;
    left: 0;
    font-weight: 700;
  }

  .active a span {
    font-weight: 700;
  }

  a:hover span {
    transform: translateY(2rem);
  }
`

export default Layout
