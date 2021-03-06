import React from 'react'

const HandSvg = (props) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox='0 0 26 25'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g clipPath='url(#prefix__clip0)'>
        <path
          d='M21.823 14.927a3.233 3.233 0 00-2.463.322c-2.495 1.697-2.33 1.586-2.347 1.595-.762.44-1.675-.26-1.447-1.111.501-1.87.46-1.735.49-1.788l4.21-7.3a1.172 1.172 0 10-2.03-1.174l-4.266 7.11c-.192.318-.684.11-.588-.25l2.284-8.523a1.176 1.176 0 00-.83-1.44A1.176 1.176 0 0013.4 3.2l-2.217 8.274c-.098.364-.635.291-.634-.083l.004-7.585c0-.315-.123-.61-.344-.832-.734-.734-2.002-.213-2.002.833l-.004 7.78c0 .376-.538.444-.635.082L6.196 6.53a1.005 1.005 0 00-.713-.713 1.011 1.011 0 00-1.232 1.238l.964 3.609a8.678 8.678 0 01-.003 4.477c-.738 2.754.898 5.595 3.646 6.331l1.138.305c1.459.39 2.983.19 4.292-.567L22 16.507c.133-.057.336-.255.412-.492a.853.853 0 00-.59-1.088zM14.72 16.47a4.683 4.683 0 00-5.11 3.425.322.322 0 11-.622-.167 5.33 5.33 0 015.815-3.898.323.323 0 01-.083.64z'
          fill={props.color}
        />
      </g>
      <defs>
        <clipPath id='prefix__clip0'>
          <path
            fill={props.color}
            transform='rotate(15 3 22.787)'
            d='M0 0h20v20H0z'
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export default HandSvg
