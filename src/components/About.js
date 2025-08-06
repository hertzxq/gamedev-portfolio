import React from 'react';
import { motion } from 'framer-motion';
import { FaGamepad, FaCode, FaLightbulb, FaUsers } from 'react-icons/fa';
import './About.css';

const About = () => {
  const skills = [
    {
      icon: FaGamepad,
      title: 'Game Development',
      description: 'Unity, C#, Game Design'
    },
    {
      icon: FaCode,
      title: 'Programming',
      description: 'C#, JavaScript, Vue.js'
    },
    {
      icon: FaUsers,
      title: 'Open Source',
      description: 'GitHub, Collaboration'
    }
  ];

  return (
    <section id="about" className="section about">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Обо мне
        </motion.h2>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>Разработчик игр с опытом программирования</h3>
            <p>
              Я увлеченный разработчик игр с опытом 1.5 года в игровой индустрии. 
              С детства увлекаюсь как играми, так и их разработкой. Специализируюсь на создании 
              игр на Unity с использованием C#, а также имею опыт в веб-разработке на Vue.js и React.
            </p>
            <p>
              Моя страсть к играм началась в раннем возрасте, и теперь я превращаю эту страсть в карьеру. 
              Я специализируюсь на создании уникальных игровых механик, оптимизации производительности 
              и создании запоминающихся игровых впечатлений.
            </p>
            <p>
              Кстати, как по мне, лучший курс по Unity, это официальный курс от самих разработчиков.
              Единственный минус это то, что он на английском языке, но если вы знаете английский, то этот курс вам точно понравится.
            </p>
          </motion.div>

          <motion.div
            className="about-stats"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">1.5</div>
                <div className="stat-label">Года опыта</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">15+</div>
                <div className="stat-label">Репозиториев</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">5+</div>
                <div className="stat-label">Технологий</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">2</div>
                <div className="stat-label">Игровых проекта</div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="skills-overview"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="skill-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="skill-icon">
                  <skill.icon />
                </div>
                <h4>{skill.title}</h4>
                <p>{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 