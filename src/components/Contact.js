import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaItchIo, FaEnvelope, FaTelegram } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/hertzxq',
      color: '#333'
    },
    {
      name: 'Itch.io',
      icon: FaItchIo,
      url: 'https://hertzxq.itch.io',
      color: '#fa5c5c'
    },
    {
      name: 'Telegram',
      icon: FaTelegram,
      url: 'https://t.me/hertzxq',
      color: '#0088cc'
    },
    {
      name: 'Email',
      icon: FaEnvelope,
      url: 'mailto:hertzxq@example.com',
      color: '#ea4335'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Имитация отправки формы
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      alert('Сообщение отправлено! Я свяжусь с вами в ближайшее время.');
    }, 2000);
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Связаться со мной
        </motion.h2>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>Немного информации!</h3>
            <p>
              Я всегда открыт для новых игровых проектов и сотрудничества. 
              Если у вас есть идея для игры или вы хотите обсудить возможности работы в игровой индустрии, 
              не стесняйтесь связаться со мной.
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <h4>Доступность</h4>
                <p>Готов к новым проектам и фриланс работе</p>
              </div>
              
              <div className="contact-item">
                <h4>Локация</h4>
                <p>Удаленная работа, доступен по всему миру</p>
              </div>
              
              <div className="contact-item">
                <h4>Время ответа</h4>
                <p>Обычно отвечаю в течение 24 часов</p>
              </div>
            </div>

            <div className="social-links-contact">
              <h4>Найти меня в сети:</h4>
              <div className="social-grid">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link-contact"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <link.icon />
                    <span>{link.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="contact-form"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Ваше имя"
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Ваш email"
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Тема сообщения"
                  required
                />
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Ваше сообщение"
                  rows="6"
                  required
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isSubmitting ? 'Отправка...' : 'Отправить сообщение'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 