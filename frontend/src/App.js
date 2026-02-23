import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Clock, Calendar } from 'lucide-react';
import '@/App.css';

function App() {
  const [curtainOpen, setCurtainOpen] = useState(false);
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const weddingDate = new Date('2026-04-25T19:00:00');

  useEffect(() => {
    const calculateCountdown = () => {
      const now = new Date();
      const difference = weddingDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });
      }
    };

    calculateCountdown();
    const interval = setInterval(calculateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleCurtainClick = () => {
    setCurtainOpen(true);
  };

  return (
    <div className="App">
      {/* Curtain Overlay */}
      <AnimatePresence>
        {!curtainOpen && (
          <motion.div
            className="curtain-overlay"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 1.8 }}
            onClick={handleCurtainClick}
            data-testid="curtain-overlay"
          >
            {/* Left Curtain Panel */}
            <motion.div
              className="curtain-panel curtain-left"
              initial={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 1.8, ease: 'easeInOut' }}
              data-testid="curtain-left"
            >
              <div className="curtain-fold" />
              <div className="curtain-fold" />
              <div className="curtain-fold" />
              <div className="curtain-fold" />
              <div className="curtain-fold" />
            </motion.div>
            
            {/* Right Curtain Panel */}
            <motion.div
              className="curtain-panel curtain-right"
              initial={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 1.8, ease: 'easeInOut' }}
              data-testid="curtain-right"
            >
              <div className="curtain-fold" />
              <div className="curtain-fold" />
              <div className="curtain-fold" />
              <div className="curtain-fold" />
              <div className="curtain-fold" />
            </motion.div>
            
            {/* Curtain Rod */}
            {/* <div className="curtain-rod" /> */}
            
            {/* Center Content */}
            <motion.div
              className="curtain-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              data-testid="curtain-click-area"
            >
              <h1 className="curtain-names">Jhanvi & Kishan</h1>
              <p className="curtain-subtitle">Open Invitation</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      {curtainOpen && (
        <div className="main-content">
          {/* Hero Section */}
          <motion.section
            className="hero-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
            data-testid="hero-section"
          >
            <div className="hero-overlay" />
            <motion.div
              className="hero-content"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2.2 }}
            >
              <motion.p
                className="hero-subtitle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.4 }}
                data-testid="hero-subtitle"
              >
                The Wedding Celebration of
              </motion.p>
              <motion.h1
                className="hero-names"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.6, duration: 0.8 }}
                data-testid="hero-names"
              >
                Jhanvi
              </motion.h1>
              <motion.h1
                className="hero-names"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.6, duration: 0.8 }}
                data-testid="hero-names"
              >
                &
              </motion.h1>
              <motion.h1
                className="hero-names"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.6, duration: 0.8 }}
                data-testid="hero-names"
              >
                Kishan
              </motion.h1>
              <motion.div
                className="hero-divider"
                initial={{ width: 0 }}
                animate={{ width: '120px' }}
                transition={{ delay: 3, duration: 0.8 }}
              />
              <motion.p
                className="hero-date"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.2 }}
                data-testid="hero-date"
              >
                April 25, 2026
              </motion.p>
              <motion.p
                className="hero-venue"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.4 }}
                data-testid="hero-venue"
              >
                Dhartii RiverView Resort, Jalalpur, Navsari, Gujarat
              </motion.p>
            </motion.div>
          </motion.section>

          {/* Countdown Section */}
          <motion.section
            className="countdown-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            data-testid="countdown-section"
          >
            <h2 className="section-title" data-testid="countdown-title">Counting Down to the Big Day</h2>
            <div className="countdown-container">
              <motion.div
                className="countdown-block"
                whileHover={{ scale: 1.05 }}
                data-testid="countdown-days"
              >
                <div className="countdown-number">{countdown.days}</div>
                <div className="countdown-label">Days</div>
              </motion.div>
              <motion.div
                className="countdown-block"
                whileHover={{ scale: 1.05 }}
                data-testid="countdown-hours"
              >
                <div className="countdown-number">{countdown.hours}</div>
                <div className="countdown-label">Hours</div>
              </motion.div>
              <motion.div
                className="countdown-block"
                whileHover={{ scale: 1.05 }}
                data-testid="countdown-minutes"
              >
                <div className="countdown-number">{countdown.minutes}</div>
                <div className="countdown-label">Minutes</div>
              </motion.div>
              <motion.div
                className="countdown-block"
                whileHover={{ scale: 1.05 }}
                data-testid="countdown-seconds"
              >
                <div className="countdown-number">{countdown.seconds}</div>
                <div className="countdown-label">Seconds</div>
              </motion.div>
            </div>
          </motion.section>

          {/* Story Section */}
          <motion.section
            className="story-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            data-testid="story-section"
          >
            <div className="container">
              <div className="story-grid">
                <motion.div
                  className="story-image-container"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <img
                    src="https://images.pexels.com/photos/29623186/pexels-photo-29623186.jpeg"
                    alt="Jhanvi and Kishan"
                    className="story-image"
                    data-testid="story-image"
                  />
                </motion.div>
                <motion.div
                  className="story-content"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <p className="story-label" data-testid="story-label">THE BEGINNING</p>
                  <h2 className="story-title" data-testid="story-title">A Tale of Two Hearts</h2>
                  <p className="story-text" data-testid="story-text">
                    What started as a simple conversation has blossomed into a beautiful journey of shared dreams and endless laughter. From the moment Jhanvi and Kishan first met, it was clear that their paths were meant to intertwine. Over the years, they've built a life filled with adventures, supporting each other through every milestone. Today, they are excited to embark on their greatest adventure yet.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* Events Schedule Section */}
          <motion.section
            className="events-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            data-testid="events-section"
          >
            <h2 className="section-title" data-testid="events-title">The Celebration Schedule</h2>
            <div className="events-container">
              <motion.div
                className="event-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ y: -10 }}
                data-testid="event-engagement"
              >
                <div className="event-image-wrapper">
                  <img
                    src="https://images.pexels.com/photos/16846853/pexels-photo-16846853.jpeg"
                    alt="Engagement Ceremony"
                    className="event-image"
                  />
                </div>
                <div className="event-content">
                  <h3 className="event-title">Engagement</h3>
                  <div className="event-details">
                    <div className="event-detail-item">
                      <Calendar className="event-icon" />
                      <span>April 23, 2026</span>
                    </div>
                    <div className="event-detail-item">
                      <Clock className="event-icon" />
                      <span>6:30 PM</span>
                    </div>
                    <div className="event-detail-item">
                      <MapPin className="event-icon" />
                      <span>Dhartii Resort Hall</span>
                    </div>
                  </div>
                  <p className="event-description">
                    Kick off the festivities with a night of music, dance, and celebration.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="event-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -10 }}
                data-testid="event-haldi"
              >
                <div className="event-image-wrapper">
                  <img
                    src="https://images.pexels.com/photos/14691580/pexels-photo-14691580.jpeg"
                    alt="Haldi and Mandap Ceremony"
                    className="event-image"
                  />
                </div>
                <div className="event-content">
                  <h3 className="event-title">Haldi & Mandap</h3>
                  <div className="event-details">
                    <div className="event-detail-item">
                      <Calendar className="event-icon" />
                      <span>April 24, 2026</span>
                    </div>
                    <div className="event-detail-item">
                      <Clock className="event-icon" />
                      <span>10:00 AM</span>
                    </div>
                    <div className="event-detail-item">
                      <MapPin className="event-icon" />
                      <span>Lotus Garden</span>
                    </div>
                  </div>
                  <p className="event-description">
                    The sacred union. Witness the exchange of vows and the beautiful traditions of our heritage.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="event-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ y: -10 }}
                data-testid="event-wedding"
              >
                <div className="event-image-wrapper">
                  <img
                    src="https://images.pexels.com/photos/33343606/pexels-photo-33343606.jpeg"
                    alt="Wedding Ceremony"
                    className="event-image"
                  />
                </div>
                <div className="event-content">
                  <h3 className="event-title">The Wedding</h3>
                  <div className="event-details">
                    <div className="event-detail-item">
                      <Calendar className="event-icon" />
                      <span>April 25, 2026</span>
                    </div>
                    <div className="event-detail-item">
                      <Clock className="event-icon" />
                      <span>7:00 PM</span>
                    </div>
                    <div className="event-detail-item">
                      <MapPin className="event-icon" />
                      <span>Starlight Hall</span>
                    </div>
                  </div>
                  <p className="event-description">
                    Let the magic continue. An evening of dinner, toast, and dancing as we celebrate our first night as a married couple.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* Venue Section */}
          <motion.section
            className="venue-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            data-testid="venue-section"
          >
            <div className="container">
              <h2 className="section-title" data-testid="venue-title">Celebration Details</h2>
              <div className="venue-content-centered">
                <motion.div
                  className="venue-info-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  data-testid="venue-info"
                >
                  <div className="venue-icon-wrapper">
                    <MapPin className="venue-icon" />
                  </div>
                  <h3 className="venue-card-title">The Venue</h3>
                  <p className="venue-card-text">
                    Dhartii RiverView Resort, Jalalpur, Navsari, Gujarat. A sanctuary of beauty where we will exchange our vows.
                  </p>
                  <a
                    href="http://maps.google.com/maps?daddr=Dhartii+RiverView+Resort,+Jalalpur,+Navsari,+Gujarat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="venue-button"
                    data-testid="venue-navigate-btn"
                  >
                    Navigate to Venue
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* Footer */}
          <motion.footer
            className="footer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            data-testid="footer"
          >
            <p className="footer-text">
              We look forward to celebrating our special day with you and creating beautiful memories together.
            </p>
            <div className="footer-divider" />
            <p className="footer-couple">Jhanvi & Kishan</p>
          </motion.footer>
        </div>
      )}
    </div>
  );
}

export default App;