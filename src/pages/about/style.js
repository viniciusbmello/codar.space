import styled from 'styled-components'

const Layout = styled.div`
  background: rgba(0, 0, 0, 0.25);
  padding: 3rem;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 0.25rem;

  margin: auto;
  max-width: 50rem;

  transform-style: preserve-3d;

  p {
    text-align: justify;
    text-justify: inter-word;
  }
`

export default Layout
