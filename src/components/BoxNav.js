import React from 'react'

import './BoxNav.scss'

const BoxNav = ({ boxNav }) => {
  return (
    <div className="box-nav">
      {boxNav &&
        boxNav.map(({ IDlink, title }) => (
          <a href={`#${IDlink}`} class="box-nav__element">
            <div class="box-nav__box"></div>
            <span>{title}</span>
          </a>
        ))}
    </div>
  )
}

export default BoxNav
