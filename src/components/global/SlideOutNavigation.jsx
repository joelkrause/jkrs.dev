import React, {useState} from 'react'
import { Link } from 'gatsby'
import { useTransition, animated } from 'react-spring'
import styled from 'styled-components';

const SlideOutMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const transitions = useTransition(isOpen, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
})
  return (
    <>
        <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Close' : 'Menu'}
        </button>

        {transitions.map(({ item, key, props }) =>
        item &&
        <animated.nav key={key} styles={{NavWrapper}}>
            <ul>
                <li><Link to="/">Link</Link></li>
            </ul>
        </animated.nav>
        )}
    </>
  )
}

const NavWrapper = `
  width:'50vw',
  height:'100vh',
  position:'fixed',
  top:'0',
  right:'0',
  z-index:'1',
  ...props
`

export default SlideOutMenu