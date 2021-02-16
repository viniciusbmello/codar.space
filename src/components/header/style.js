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

  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */

  z-index: 998;

  .header-content {
    margin: auto;
    width: 100%;
    max-width: 120rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h1 {
    margin-left: 1rem;
    margin-top: -0.2rem;
    font: 400 2.4rem 'Montserrat', sans-serif;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: center;

    float: left;
  }

  a {
    display: inline-block;
    text-decoration: none;
    text-transform: uppercase;
    font: 400 2rem 'Montserrat', sans-serif;
    color: lightgray;
    overflow: hidden;
    padding: 0 1rem;
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
    color: white;
  }

  .active a span {
    font-weight: 700;
    color: white;
  }

  li:not(.active) a:hover span {
    transform: translateY(2rem);
  }
`

export default Layout
