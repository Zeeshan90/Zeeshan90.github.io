import React from 'react';
import projects from '../assets/data/projects.json';

const Projects = () => {
  return (
    <div className="container project my-3">
      <h1>Projects</h1>
      <div className="row d-flex justify-content-center">
        {projects.map((data, index) => (
          <div key={data.key} className="my-3 col-md-4 col-lg-3 col-sm-6 mx-3">
            <div className="card bg-dark text-light h-100" style={{ width: "18rem" }}>
              <img
                src={data.imageSrc}
                className="card-img-top"
                alt={data.title}
              />
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