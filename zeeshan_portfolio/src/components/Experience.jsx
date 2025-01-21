import React from 'react'
import experience from '../assets/data/experience.json'

const Experience = () => {
  return (
    <>
    <div className="container experience">
      <h1>Experience</h1>
      {
       experience.map((data)=>{
        console.log(data);
        return(
          <>
          <div key={data.id} className="ex-items">
          <div className="left">
            <img src="" alt="" />
          </div>
          <div className="right">
            <h3>{data.role}</h3>
            <h4>{data.organisation}</h4>
            <h5>{data.startDate} {data.endDate} {data.location}</h5>
              <li><ol>{data.experiences[0]}</ol>
              <ol>{data.experiences[1]}</ol>
              <ul>{data.experiences[2]}</ul>
              <ul>{data.experiences[3]}</ul>
              </li>
          </div>
          </div>
          </>
        )
       })
      }
    </div>
    </>
  )
}

export default Experience