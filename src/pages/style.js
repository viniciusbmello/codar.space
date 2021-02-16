import styled from 'styled-components'

const Layout = styled.div`
  margin: auto;
  max-width: 50rem;

  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */

  transform-style: preserve-3d;

  h1 {
    background: rgba(0, 0, 0, 0.25);
    padding: 2rem 3rem;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 0.25rem;

    font-size: 2.4rem;
    margin-bottom: 1px;
  }

  p {
    background: rgba(0, 0, 0, 0.25);
    padding: 2rem 3rem;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 0.25rem;

    text-align: justify;
    text-justify: inter-word;
  }
`

export default Layout
