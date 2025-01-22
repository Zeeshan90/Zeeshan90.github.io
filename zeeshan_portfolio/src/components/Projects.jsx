import React from 'react';
import projects from '../assets/data/projects.json';

const Projects = () => {
  return (
    <div className="container project my-3">
      <h1>Projects</h1>
      <div className="row">
        {projects.map((data) => (
          <div key={data.key} className="col-md-4">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={`/src/assets/${data.imageSrc}`}
                className="card-img-top"
                alt={data.title}
              />
              <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <ul>
                  {data.description.map((description, index) => (
                    <li key={index}>{description}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
