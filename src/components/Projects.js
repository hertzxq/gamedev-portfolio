import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaItchIo, FaPlay, FaEye, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Dont Let Me Freeze',
      description: 'Игра про выживание у костра в холодной среде. Исследуйте мир, собирайте ресурсы и не дайте себе замерзнуть.',
      image: '/3l4EI0.png', // Ваше изображение из public
      category: 'game',
      technologies: ['Unity', 'C#', 'Game Design'],
      github: 'https://github.com/hertzxq/DontLetMeDieHere',
      itch: 'https://hertzxq.itch.io/dont-let-me-freeze',
      demo: 'https://hertzxq.itch.io/dont-let-me-freeze',
      featured: true,
      hasImage: true
    },
    {
      id: 2,
      title: 'HertzxqSnickers',
      description: 'Веб-приложение на Vue.js с современным интерфейсом и интерактивными элементами.',
      image: '/hertzxqSnickers.png', // Ваше изображение из public
      category: 'web',
      technologies: ['Vue.js', 'JavaScript', 'CSS3'],
      github: 'https://github.com/hertzxq/HertzxqSnickers',
      demo: 'https://github.com/hertzxq/HertzxqSnickers',
      featured: false,
      hasImage: true
    },
    {
      id: 3,
      title: 'Urban Destroyer',
      description: 'Игровой проект с динамичным геймплеем и современной графикой.',
      image: '/UrbanDestoyer.png', // Ваше изображение из public
      category: 'game',
      technologies: ['Unity', 'C#', 'Game Design'],
      github: 'https://github.com/hertzxq/urban-destroyer',
      demo: 'https://yandex.ru/games/app/443995',
      featured: false,
      hasImage: true
    },
    {
      id: 4,
      title: 'Other Projects',
      description: 'Другие мои проекты можно посмтреть тут',
      category: 'other',
      technologies: [' '],
      github: 'https://github.com/hertzxq/',
      demo: 'https://github.com/hertzxq/',
      featured: false,
      hasImage: false
    }
  ];

  const filters = [
    { name: 'Все', value: 'all' },
    { name: 'Игры', value: 'game' },
    { name: 'Веб-проекты', value: 'web' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Мои проекты
        </motion.h2>

        <motion.div
          className="filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {filters.map((filter, index) => (
            <motion.button
              key={index}
              className={`filter-btn ${activeFilter === filter.value ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.value)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {filter.name}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="projects-grid"
          layout
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`project-card ${project.featured ? 'featured' : ''}`}
              layout
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              {project.hasImage ? (
                // Карточка с изображением
                <>
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                    <div className="project-overlay">
                      <div className="project-links">
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FaGithub />
                        </motion.a>
                        {project.itch && (
                          <motion.a
                            href={project.itch}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <FaItchIo />
                          </motion.a>
                        )}
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FaPlay />
                        </motion.a>
                      </div>
                    </div>
                    {project.featured && (
                      <div className="featured-badge">
                        <FaEye />
                      </div>
                    )}
                  </div>
                  
                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-technologies">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                // Карточка без изображения (только блок с информацией)
                <div className="project-content-only">
                  <div className="project-icon">
                    <FaGithub />
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-link"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt />
                    Посмотреть на GitHub
                  </motion.a>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 