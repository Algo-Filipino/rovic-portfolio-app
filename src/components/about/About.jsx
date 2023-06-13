import React from 'react'
import './about.css'
import ME from '../../assets/about-me.png'
import CTA from '../header/CTA'

const about = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className='about__container'>
        <div className='about__left'>
          <div className='about__image'> 
            <img src={ME} alt='About Image'/>
          </div>
        </div>

        <div className='about__right'>
          <h5 className='about__intro'>Hi! It's Me John Rovie</h5>
          <h5 className='about__intro1'>and I'm a <span className='typewriter'>Web Developer</span></h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in augue elementum, viverra diam sed, sagittis velit. Donec sit amet pulvinar odio. Aenean lacinia, purus sed porta condimentum, justo augue mollis eros, at hendrerit purus ante condimentum quam.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in augue elementum, viverra diam sed, sagittis velit. Donec sit amet pulvinar odio. Aenean lacinia, purus sed porta condimentum, justo augue mollis eros, at hendrerit purus ante condimentum quam.</p>
          <CTA />
        </div>
      </div>
    </section>
  )
}

export default about