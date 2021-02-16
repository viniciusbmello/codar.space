import styled from 'styled-components'

const Layout = styled.div`
  margin: auto;
  max-width: 50rem;

  transform-style: preserve-3d;

  h1 {
    background: rgba(255, 255, 255, 0.25);
    padding: 1rem 1rem;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 1rem 1rem 0 0;

    font-size: 1.4rem;
    margin-bottom: 2px;

    display: flex;
    align-items: center;

    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
  }

  p {
    background: rgba(0, 0, 0, 0.25);
    padding: 2rem 3rem;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 0 0 1rem 1rem;

    text-align: justify;
    text-justify: inter-word;

    line-height: 2rem;
  }

  .fakeClose {
    width: 1.2rem;
    height: 1.2rem;
    margin-right: 0.5rem;

    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.5);

    background: red;
  }
  .fakeMinimize {
    width: 1.2rem;
    height: 1.2rem;
    margin-right: 0.5rem;

    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.5);

    background: yellow;
  }
  .fakeZoom {
    width: 1.2rem;
    height: 1.2rem;
    margin-right: 1.5rem;

    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.5);

    background: lightgreen;
  }
`

export default Layout
