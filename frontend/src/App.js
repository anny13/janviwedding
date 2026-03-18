import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Clock, Calendar } from 'lucide-react';
import '@/App.css';

function App() {
  const [curtainOpen, setCurtainOpen] = useState(false);
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const weddingDate = new Date('2026-04-25T16:00:00');

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurtainOpen(true);
    }, 2000);

    return () => clearTimeout(timer); // cleanup
  }, []);

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
            // onClick={handleCurtainClick}
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
              <h1 className="curtain-names">Jahanvi & Kishan</h1>
              {/* <p className="curtain-subtitle">Open Invitation</p> */}
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
                || Shree Ganeshaya Namah ||
              </motion.p>

              <motion.p
                className="hero-subtitle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.4 }}
                data-testid="hero-subtitle"
              >
                With the blessings of Jagat Janani Shree Umiya Mataji and our Kuldevi Shree Ambe Mataji, we joyfully invite you to celebrate the wedding of
              </motion.p>

              <motion.p
                className="hero-subtitle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.4 }}
                data-testid="hero-subtitle"
              >
                (Daughter of Smt. Jyotsnaben & Shri Gopalbhai Jasmatbhai Dhamsaniya)
              </motion.p>
              <motion.h1
                className="hero-names"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.6, duration: 0.8 }}
                data-testid="hero-names"
              >
                Jahanvi
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
              <motion.p
                className="hero-subtitle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.4 }}
                data-testid="hero-subtitle"
              >
                (Son of Smt. Jyotsnaben & Shri Ghansyambhai Arjanbhai Patel)
              </motion.p>
              <motion.p
                className="hero-subtitle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.4 }}
                data-testid="hero-subtitle"
              >
                On this auspicious occasion, we request your gracious presence to bless the newly wedded couple and make the celebration memorable.
              </motion.p>
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
                    src="https://customer-assets.emergentagent.com/job_janvi-kishan-wedding/artifacts/5stdmf5z_tale%20of%20tale.JPEG"
                    alt="Janvi and Kishan"
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
                    Jahanvi and Kishan’s story began with a beautiful introduction through family.
                    Miles apart between Navsari and Hyderabad, their connection grew stronger with time, love, and understanding. What started as a meeting of two families soon blossomed into a bond of two hearts.
                  </p>
                  <br/>
                  <p className="story-text" data-testid="story-text">
                    Now, as they begin a new chapter together, they invite you to join them in celebrating their wedding and the beginning of their forever.
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
                  <h3 className="event-title">Ring Ceremony</h3>
                  <div className="event-details">
                    <div className="event-detail-item">
                      <Calendar className="event-icon" />
                      <span>April 23, 2026</span>
                    </div>
                    <div className="event-detail-item">
                      <Clock className="event-icon" />
                      <span>6:00 PM</span>
                    </div>
                    <div className="event-detail-item">
                      <MapPin className="event-icon" />
                      <span>Dhartii Resort Hall</span>
                    </div>
                  </div>
                  <p className="event-description">
                    Celebrate the beginning of forever as the couple exchanges rings, marking the start of their beautiful journey together with love, joy, and blessings.
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
                  <h3 className="event-title">Mandap Muhrat</h3>
                  <div className="event-details">
                    <div className="event-detail-item">
                      <Calendar className="event-icon" />
                      <span>April 24, 2026</span>
                    </div>
                    <div className="event-detail-item">
                      <Clock className="event-icon" />
                      <span>7:00 AM</span>
                    </div>
                    <div className="event-detail-item">
                      <MapPin className="event-icon" />
                      <span>Dhartii Resort Hall</span>
                    </div>
                  </div>
                  <p className="event-description">
                    Witness the sacred Mandap Muhurat, where prayers and rituals bless the wedding venue and mark the auspicious beginning of the wedding celebrations.
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
                  <h3 className="event-title">Haldi</h3>
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
                      <span>Dhartii Resort Hall</span>
                    </div>
                  </div>
                  <p className="event-description">
                    Join us for a vibrant Haldi ceremony filled with laughter, traditions, and turmeric blessings as we prepare the bride and groom for their big day.
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
                  <h3 className="event-title">Bollywood Night</h3>
                  <div className="event-details">
                    <div className="event-detail-item">
                      <Calendar className="event-icon" />
                      <span>April 24, 2026</span>
                    </div>
                    <div className="event-detail-item">
                      <Clock className="event-icon" />
                      <span>8:00 PM</span>
                    </div>
                    <div className="event-detail-item">
                      <MapPin className="event-icon" />
                      <span>Dhartii Resort Hall</span>
                    </div>
                  </div>
                  <p className="event-description">
                    Get ready for an electrifying Bollywood Night full of music, dance, and dazzling performances as friends and family light up the stage.
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
                      <span>4:00 PM</span>
                    </div>
                    <div className="event-detail-item">
                      <MapPin className="event-icon" />
                      <span>Dhartii Resort Hall</span>
                    </div>
                  </div>
                  <p className="event-description">
                    Join us as two hearts unite in the sacred bond of marriage, surrounded by love, traditions, and the blessings of family and friends.
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
                  {/* http://maps.google.com/maps?daddr=Dhartii+RiverView+Resort,+Jalalpur,+Navsari,+Gujarat */}
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Dhartii+RiverView+Resort+Navsari"
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

          <motion.section
            className="venue-section pb-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            data-testid="venue-section"
          >
            <div className="container">
              <h2 className="section-title" data-testid="venue-title">A Joyful Note</h2>
              <div className="venue-content-centered">
                <motion.div
                  className="venue-info-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  data-testid="venue-info"
                >
                  <p className="venue-card-text">
                    Your presence will fill our celebration with fragrance like flowers in bloom.  
When you arrive to bless the couple, our hearts will be filled with happiness and gratitude.
                  </p>

                  <h4 className="section-title mb-0" data-testid="venue-title" style={{fontSize:"18px"}}>With Love From</h4>
                  <p className="venue-card-text venue-card-love mb-0">
                    Miransh
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.section>

          <motion.section
            className="venue-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            data-testid="venue-section"
          >
            <div className="container">
              <h2 className="section-title" data-testid="venue-title">Blessings From Elders</h2>
              <div className="venue-content-centered">
                <motion.div
                  className="venue-info-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  data-testid="venue-info"
                >
                  <p className="venue-card-text mb-0">
                    Shri Jasmatbhai Kurjibhai Dhamsaniya
                  </p>
                  <p className="venue-card-text mb-0">
                    Smt Paniben Jasmatbhai Dhamsaniya
                  </p>
                  <p className="venue-card-text mb-0">
                    Shri Bhavanbhai Kurjibhai Dhamsaniya
                  </p>
                  <p className="venue-card-text mb-0">
                    Smt Jamuben Bhavanbhai Dhamsaniya
                  </p>
                  <p className="venue-card-text mb-0">
                    Shri Harjibhai Kurjibhai Dhamsaniya
                  </p>
                  <p className="venue-card-text mb-0">
                    Smt Kantaben Harjibhai Dhamsaniya
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.section>

          <motion.section
            className="venue-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            data-testid="venue-section"
          >
            <div className="container">
              <h2 className="section-title" data-testid="venue-title">Loving Family</h2>
              <div className="venue-content-centered">
                <motion.div
                  className="venue-info-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  data-testid="venue-info"
                >
                  <p className="venue-card-text mb-0">
                    Shri Mukeshbhai Jasmatbhai Dhamsaniya
                  </p>
                  <p className="venue-card-text mb-0">
                    Smt Ansoyaben Mukeshbhai Dhamsaniya
                  </p>
                  <p className="venue-card-text mb-0">
                    Shri Gopalbhai Jasmatbhai Dhamsaniya
                  </p>
                  <p className="venue-card-text mb-0">
                    Smt Jyotsnaben Gopalbhai Dhamsaniya
                  </p>
                  <p className="venue-card-text mb-0">
                    Shri Pravinbhai Jasmatbhai Dhamsaniya
                  </p>
                  <p className="venue-card-text mb-0">
                    Smt Bhavishaben Pravinbhai Dhamsaniya
                  </p>
                  <p className="venue-card-text mb-0">
                    Shri Jayeshbhai Bhavanbhai Dhamsaniya
                  </p>
                  <p className="venue-card-text mb-0">
                    Smt Jayshreeben Jayeshbhai Dhamsaniya
                  </p>
                  <p className="venue-card-text mb-0">
                    Shri Vipulbhai Bhavanbhai Dhamsaniya
                  </p>
                  <p className="venue-card-text mb-0">
                    Smt Nishaben Vipulbhai Dhamsaniya
                  </p>
                  <p className="venue-card-text mb-0">
                    Shri Sandipbhai Harjibhai Dhamsaniya
                  </p>
                  <p className="venue-card-text mb-0">
                    Smt Rinaben Sandipbhai Dhamsaniya
                  </p>
                  <p className="venue-card-text mb-0">
                    Shri Avadhbhai Mukeshbhai Dhamsaniya
                  </p>
                  <p className="venue-card-text mb-0">
                    Smt Nimishaben Avadhbhai Dhamsaniya
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.section>

          <motion.section
            className="venue-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            data-testid="venue-section"
          >
            <div className="container">
              <h2 className="section-title" data-testid="venue-title">Best Wishes From</h2>
              <div className="venue-content-centered">
                <motion.div
                  className="venue-info-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  data-testid="venue-info"
                >
                  <p className="venue-card-text mb-0">
                    Parth Gopalbhai Dhamsaniya
                  </p>
                  <p className="venue-card-text mb-0">
                    Deep Pravinbhai Dhamsaniya
                  </p>
                  <p className="venue-card-text mb-0">
                    Panth Vipulbhai Dhamsaniya
                  </p>
                  <p className="venue-card-text mb-0">
                    Shivansh Sandipbhai Dhamsaniya
                  </p>
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
            <p className="footer-couple">Jahanvi & Kishan</p>
          </motion.footer>
        </div>
      )}
    </div>
  );
}

export default App;