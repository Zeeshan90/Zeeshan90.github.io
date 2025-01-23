import React from 'react';
import skill from '../assets/data/skills.json';

const Skills = () => {
  return (
    <div className="container skills">
      <h1>Skills</h1>
      <div className="items">
        {skill.map((data) => (
          <div className="item" key={data.id}>
            <img src={`src/assets/${data.imageSrc}`} alt={data.title} />
            <h5>{data.title}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
