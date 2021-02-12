import { createGlobalStyle } from 'styled-components'

const NProgressStyle = createGlobalStyle`
#nprogress {
  pointer-events: none;
}

#nprogress .bar {
  background: lightcyan;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
}
`

export default NProgressStyle
