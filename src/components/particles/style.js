import styled from 'styled-components'

const Layout = styled.div`
  position: fixed !important;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  opacity: 1;
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
