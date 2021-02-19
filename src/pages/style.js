import styled from 'styled-components'

const Layout = styled.div`
  * {
    transition: 0.2s linear;
  }

  .wrapper h1 {
    line-height: 9vw;
    font-weight: 300;
    user-select: none;
  }

  .alignRight h1 {
    text-align: right;
  }

  .firstLine h1 {
    display: inline;
    font-size: 6vw;
    line-height: 12vw;
  }

  .firstLine span {
    font-weight: 400;
    font-size: 10vw;
  }

  .secondLine h1 {
    font-family: 'Parisienne', sans-serif;
    font-weight: 400;
    font-size: 15vw;
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
    font-size: 2.2rem;

    color: white;
    text-decoration: none;
    user-select: none;

    border-radius: 2rem;
    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.2);
    background: rgba(0, 0, 0, 0.25);

    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
  }

  .buttonContainer a:hover {
    box-shadow: 0 0 0 1px #ffcde4;
    background: rgba(0, 0, 0, 0.2);
    font-size: 2.4rem;
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

  @media screen and (min-width: 760px) {
    .wrapper h1 {
      line-height: 7rem;
    }

    .firstLine h1 {
      font-size: 6.2rem;
      line-height: 10rem;
    }

    .firstLine span {
      font-size: 9.2rem;
    }

    .secondLine h1 {
      font-size: 11.4rem;
    }

    .thirdLine h1 {
      font-size: 6.2rem;
    }

    .forthLine h1 {
      font-size: 10rem;
    }

    .wrapper p {
      font-size: 3rem;
    }

    .buttonContainer a {
      width: 62rem;
      font-size: 2.4rem;
    }
  }
`

export default Layout
