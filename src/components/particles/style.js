import styled from 'styled-components'

const Layout = styled.div`
  position: fixed !important;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  height: 100vh;
  width: 100vw;

  animation: grow 1s;

  @keyframes grow {
    from {
      height: 0;
      width: 0;
    }
    to {
      height: 100vh;
      width: 100vw;
    }
  }
`

export default Layout
