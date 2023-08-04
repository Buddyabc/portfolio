import React from 'react'
import './intro.css'
import portfolio1 from '../Images/portfolio1.png';
function intro() {
  return (
    <div>
      <div className='i'>
        <div className="i-left">
          <div className="i-left-wrapper">
            <h2 className="i-intro">Hello,This is</h2>
            <h1 className="i-name">Vikrant Tyagi</h1>
            <div className="i-title">
              <div className="i-title-wrapper">
                  <div className="i-title-item">ReactJs Developer</div>
                  <div className="i-title-item">RPA-Developer</div>
                  <div className="i-title-item">Python Developer</div>
                 
              </div>
            </div>
            <div className="desc">Welcome!! to My portfolio, As a Front-End Web-developer i am always be desirable to learn new things and try to make the things simple and effective.
            </div>
            <a href="https://www.overleaf.com/project/6492bd269a192ffcfb029178"><button className='btn btn-success '>Download Resume</button></a>
          </div>
        </div>
        <div className="i-right">
          <div className="i-bg"></div>
        <img src={portfolio1} alt="" className="port-img" />        
                </div>
      </div>
      
    </div>
  )
}

export default intro
