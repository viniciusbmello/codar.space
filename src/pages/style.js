import styled from 'styled-components'

const Layout = styled.div`
  .wrapper h1 {
    line-height: 9vw;
    font-weight: 300;
  }

  .alignRight h1 {
    text-align: right;
  }

  .firstLine h1 {
    display: inline;
    font-size: 8vw;
  }

  .firstLine span {
    font-weight: 400;
    font-size: 12vw;
  }

  .secondLine h1 {
    font-weight: 500;
    font-size: 13vw;
    color: #ffcde4;
  }

  .thirdLine h1 {
    font-size: 8vw;
  }

  .forthLine h1 {
    font-size: 13vw;
    color: #ffcde4;
  }

  .forthLine span {
    font-weight: 500;
  }

  p {
    padding-top: 4rem;
    text-align: right;
    font-size: 4.5vw;
  }
`

export default Layout
