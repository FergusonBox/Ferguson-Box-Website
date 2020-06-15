import React, {useState} from 'react'

import './ScrollToTopButton.scss'

const ScrollToTopButton = () => {
  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400){
      setShowScroll(false)
    }
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  if (typeof window !== `undefined`) {
    window.addEventListener('scroll', checkScrollTop)
  }

  return (
    <div className="scroll-to-top" onClick={scrollTop} style={{visibility: showScroll ? 'visible' : 'hidden', opacity: showScroll ? '1' : '0'}}>
      <span>⇧<br/>BACK TO TOP</span>
    </div>
  )
}

export default ScrollToTopButton
