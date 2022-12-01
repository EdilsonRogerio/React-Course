import React, { useState, useEffect } from 'react';
import { Data, Nav } from './Data';
import WorksItems from './WorksItems';

const Works = () => {

  const [item, setItem] = useState({ name: 'todos' });
  const [projetos, setProjetos] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === 'todos') {
      setProjetos(Data);
    } else {
      const newProjects = Data.filter((project) => project.category.toLowerCase() === item.name);
      setProjetos(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <div>
      <div className="work__filters">
        {
          Nav.map((item, index) => {
            return (
              <span
                onClick={(e) => { handleClick(e, index); }}
                className={`${active === index ? 'active-work' : ''} work__item`}
                key={index}>
                {item.name}
              </span>
            )
          })
        }
      </div>
      <div className="work__container container grid">
        {
          projetos.map((item) => {
            return (
              <WorksItems item={item} key={item.id} />
            );
          })
        }
      </div>
    </div>
  )
}

export default Works;