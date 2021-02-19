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

  .wrapper p {
    margin-top: 4vh;
    font-size: 4vw;
    text-align: right;
  }

  .buttonContainer {
    position: fixed;
    left: 5vw;
    right: 5vw;
    bottom: 5vh;
  }

  .buttonContainer a {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 7rem;
    margin: auto;
    font-size: 2.8rem;

    color: white;
    text-decoration: none;

    border-radius: 2rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.2);

    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
  }

  .buttonContainer a span {
    transform: rotate(10deg);
    transform-origin: bottom left;
    animation: helloHand 0.5s ease infinite alternate;
  }

  @keyframes helloHand {
    from {
      transform: rotate(10deg);
    }
    to {
      transform: rotate(16deg);
    }
  }
`

export default Layout
