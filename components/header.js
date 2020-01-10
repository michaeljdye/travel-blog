/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

const navItem = css`
  margin-right: 10px;
`

const Header = () => {
  return (
    <div
      css={css`
        background: rebeccapurple;
        color: #fff;
      `}
    >
      <nav>
        <ul
          css={css`
            display: flex;
            padding: 10px 0;
            list-style: none;
            justify-content: flex-end;
          `}
        >
          <li css={navItem}>Home</li>
          <li css={navItem}>About</li>
          <li css={navItem}>Contact</li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
