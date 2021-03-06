import styled from 'styled-components'

const Layout = styled.div`
  position: fixed !important;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  animation: opacityChange 3s;

  @keyframes opacityChange {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

export default Layout
