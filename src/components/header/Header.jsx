import React from 'react'
import './header.css'
import CTA from './CTA'
import HERO from '../../assets/hero.png'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <div className='column left'>
          <h5 className='intro'>Hi! It's Me</h5>
          <h1 className='name'>John Rovie</h1>
          <h5 className='text-light'>and I'm a <span className='typewriter'>Web Developer</span></h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in augue elementum, viverra diam sed, sagittis velit. Donec sit amet pulvinar odio. Aenean lacinia, purus sed porta condimentum, justo augue mollis eros, at hendrerit purus ante condimentum quam.</p>
          <CTA />
        </div>

        <div className='column right'>
          <img src={HERO} alt='Computer Programming'/>
        </div>
      </div>
    </header>
  )
}

export default Header