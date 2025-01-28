import React from 'react'
import zeeImg from '../assets/zeeshanImg.jpeg'
import resumPdf from '../assets/resume/resume.pdf'

const About = () => {
  return (
    <>
    <div className='container home'>
      
      <div className='right'>
        <div className='zeeImg'>
          <img src={zeeImg} alt="Zeeshan Ashraf" />
        </div>
      </div>
      <div className='left'>
      <h1>M Zeeshan Ashraf</h1>
      <p>Senior Mobile Application Developer</p>
      <a href={resumPdf} download="M Zeeshan Ashraf.pdf" className="btn btn-outline-primary">Download Resume</a>
      </div>
    </div>
    </>
  )
}

export default About