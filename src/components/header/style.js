import styled from 'styled-components'

const Layout = styled.div`
  position: fixed;

  display: flex;
  align-items: center;

  top: 0;
  left: 0;

  width: 100vw;
  height: 7rem;

  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.2);

  h1 {
    font-size: 4rem;
    font-weight: 300;
    margin-left: 1rem;

    display: flex;
    align-items: center;
  }

  h1 span {
    margin-left: 1rem;
    font-weight: 500;
  }
`

export default Layout
