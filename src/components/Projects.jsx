import React from 'react';
import projects from '../assets/data/projects.json';

const Projects = () => {
  return (
    <div className="container project my-3">
      <h1>Projects</h1>
      <div className="row d-flex justify-content-center align-content-center">
        {projects.map((data, index) => (
          <div key={data.key} className="my-4 col-sm-6 col-lg-3 mx">
            <div className="card bg-dark text-light h-100" style={{ width: "18rem", border:"2px solid lightgray", boxShadow:"rgb(24, 23, 23)" }}>
              <div className='img d-flex mt-2 justify-content-center align-content-center'>
              <img
                src={data.imageSrc}
                className="card-img-top"
                alt={data.title}
                style={{
                  width:"250px",
                  height:"200px",
                  backgroundColor:"#000",
                  border:"1px solid lightgray",
                  borderRadius:"10px"
                }}
              />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">{data.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;