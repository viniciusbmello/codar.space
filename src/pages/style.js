import styled from 'styled-components'

const Layout = styled.div`
  background: rgba(0, 0, 0, 0.25);
  padding: 3rem;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 0.5rem;
  max-width: 32rem;

  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */

  p {
    text-align: justify;
    text-justify: inter-word;
  }
`

export default Layout
