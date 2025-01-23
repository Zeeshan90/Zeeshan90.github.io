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
          <div key={data.id} className="ex-items text-center my-5">
          <div className="left">
            <img src="" alt="" />
          </div>
          <div className="right">
                <h3>{data.role}</h3>
                <h4>
                  {data.organisation} - {data.location}
                </h4>
                <h5>
                  {data.startDate} - {data.endDate}
                </h5>
              <ul>
                  {data.experiences.map((experience, index) => (
                    <li key={index}>{experience}</li>
                  ))}
              </ul>
          </div>
          </div>
          </>
        );
       })
      }
    </div>
    </>
  );
};

export default Experience