import React from 'react'
import './projects.css'
import PROJECT1 from '../../assets/portfolio3.jpg'
import PROJECT2 from '../../assets/portfolio2.jpg'
import PROJECT3 from '../../assets/portfolio1.jpg'

const Projects = () => {
  return (
    <section id="projects">
      <h2 className='projects__title'>Projects</h2>
      <div className='projects__container'>
        <div className='projects__card'>
          <div className='projects__imgBox'>
            <img src={PROJECT1} alt=''/>
          </div>
          <div className='projects__content'>
            <h2>Project 1</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in augue elementum, viverra diam sed, sagittis velit.</p>
            <a href='#' className='live__btn'>Live Demo</a>
            <a href='#'>View Source</a>
          </div>
        </div>

        <div className='projects__card'>
          <div className='projects__imgBox'>
            <img src={PROJECT2} alt=''/>
          </div>
          <div className='projects__content'>
            <h2>Project 2</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in augue elementum, viverra diam sed, sagittis velit.</p>
            <a href='#' className='live__btn'>Live Demo</a>
            <a href='#'>View Source</a>
          </div>
        </div>

        <div className='projects__card'>
          <div className='projects__imgBox'>
            <img src={PROJECT3} alt=''/>
          </div>
          <div className='projects__content'>
            <h2>Project 3</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in augue elementum, viverra diam sed, sagittis velit.</p>
            <a href='#' className='live__btn'>Live Demo</a>
            <a href='#'>View Source</a>
          </div>
        </div>

        <div className='projects__card'>
          <div className='projects__imgBox'>
            <img src={PROJECT1} alt=''/>
          </div>
          <div className='projects__content'>
            <h2>Project 1</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in augue elementum, viverra diam sed, sagittis velit.</p>
            <a href='#' className='live__btn'>Live Demo</a>
            <a href='#'>View Source</a>
          </div>
        </div>

        <div className='projects__card'>
          <div className='projects__imgBox'>
            <img src={PROJECT2} alt=''/>
          </div>
          <div className='projects__content'>
            <h2>Project 2</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in augue elementum, viverra diam sed, sagittis velit.</p>
            <a href='#' className='live__btn'>Live Demo</a>
            <a href='#'>View Source</a>
          </div>
        </div>

        <div className='projects__card'>
          <div className='projects__imgBox'>
            <img src={PROJECT3} alt=''/>
          </div>
          <div className='projects__content'>
            <h2>Project 3</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in augue elementum, viverra diam sed, sagittis velit.</p>
            <a href='#' className='live__btn'>Live Demo</a>
            <a href='#'>View Source</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects