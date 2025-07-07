'use client';
import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun, FaPhone, FaDownload, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // ✅ Apply theme on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const shouldUseDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
      setDarkMode(shouldUseDark);
      document.body.classList.toggle('dark', shouldUseDark);
    }
  }, []);

  // ✅ Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(prev => {
      const newMode = !prev;
      document.body.classList.toggle('dark', newMode);
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      return newMode;
    });
  };

  const handleHamburger = () => setNavOpen(open => !open);
  const handleNavLinkClick = () => setNavOpen(false);

  return (
    <div>
      <header id="home">
        <nav className="site-nav">
          <img alt="Logo" className="logo-img" src="../logo.png" />

          {!navOpen && (
            <div
              aria-label="Open navigation"
              className="hamburger"
              tabIndex="0"
              onClick={handleHamburger}
              onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && handleHamburger()}
              role="button"
              aria-expanded={navOpen}
              aria-controls="nav-links"
              style={{ display: 'none' }}
            >
              <span />
              <span />
              <span />
            </div>
          )}

          <ul className="nav-links nav-links-desktop">
            <li><a className="active" href="#home">Intro</a></li>
            <li><a href="#countdown">Countdown</a></li>
            <li><a href="#note">Note</a></li>
            <li><a href="#map">Location</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          {navOpen && (
            <>
              <ul className="nav-links nav-links-mobile open" style={mobileNavStyle}>
                <li style={{ alignSelf: 'flex-end', marginBottom: 16 }}>
                  <button aria-label="Close navigation" onClick={handleHamburger} style={closeButtonStyle}>
                    <FaTimes />
                  </button>
                </li>
                <li><a className="active" href="#home" onClick={handleNavLinkClick}>Intro</a></li>
                <li><a href="#countdown" onClick={handleNavLinkClick}>Countdown</a></li>
                <li><a href="#note" onClick={handleNavLinkClick}>Note</a></li>
                <li><a href="#map" onClick={handleNavLinkClick}>Location</a></li>
                <li><a href="#contact" onClick={handleNavLinkClick}>Contact</a></li>
              </ul>
              <div
                onClick={handleHamburger}
                style={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  width: '100vw',
                  height: '100vh',
                  background: 'rgba(0,0,0,0.2)',
                  zIndex: 1000,
                }}
              />
            </>
          )}

          <button
            aria-label="Toggle dark mode"
            onClick={toggleDarkMode}
            style={{ fontSize: '2rem', background: 'none', border: 'none', cursor: 'pointer' }}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          <button className="btn" id="contact">
            <FaPhone /> Call us
          </button>
        </nav>

        {!navOpen && (
          <div className="header-content">
            <p className="text-m">IMOMOTIMI FOUNDATION PRESENTS </p>
            <h2 className="text-n">
              Imomotimi Ijaw <br />
              <span className="text-p">Dance contest 2024</span>
            </h2>
            <button className="btn-n">
              Download Entry Form <FaDownload />
            </button>
            <p className="text-r">
              All duly filled out forms and the entry fees should be brought along to the audition.
            </p>
            <div className="mouse-animation">
              <div className="mouse-scroll" />
            </div>
          </div>
        )}
      </header>

    <img
  alt="Shape"
  className="header-bottom-shape hide-on-mobile"
  id="topblack"
  src={darkMode ? '../shape-top-black-80-transparent.png' : '/shape-top-white-80.png'}
/>

{/* <img
  alt="Shape"
  className="header-bottom-shape hide-on-mobile"
  src={darkMode ? '/shape-top-black-80.png' : '/shape-top-white-80.png'}
/> */}

<style jsx>{`
  .header-bottom-shape{
    height:90px;
  }
  .header-bottom-shape {
    width: 100%;
    height: auto;
    display: block;
  }

  @media (max-width: 900px) {
    .hide-on-mobile {
      display: none !important;
    }
  }
`}</style>


      <style jsx>{`
        @media (max-width: 900px) {
          .hide-on-mobile {
            display: none !important;
          }
        }
      `}</style>

      <style jsx>{`
        @media (max-width: 900px) {
          .hamburger {
            display: inline-flex !important;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            background: none;
            border: none;
            cursor: pointer;
            z-index: 1002;
          }
          .hamburger span {
            width: 25px;
            height: 3px;
            background: #333;
            margin: 3px;
            border-radius: 2px;
            transition: 0.3s;
          }
          .nav-links {
            display: none;
          }
          .nav-links.open,
          .nav-links-mobile.open {
            display: flex !important;
          }
        }
      `}</style>

      {/* 🌙 Global dark mode styles */}
      <style jsx global>{`
        body.dark {
          background-color: #121212;
          color: white;
        }

        body.dark .header-content,
        body.dark .text-m,
        body.dark .text-n,
        body.dark .text-p,
        body.dark .text-r,
        body.dark .site-nav a,
        body.dark .btn,
        body.dark .btn-n {
          color: white !important;
        }
          
       

        body.dark .btn,
        body.dark .btn-n {
          background-color: #333;
          border: 1px solid #fff;
        }

        body.dark .hamburger span {
          background-color: white;
        }

        body.dark .site-nav {
          background-color: #1e1e1e;
        }
      `}</style>
    </div>
  );
};

// Mobile nav styles
const mobileNavStyle = {
  position: 'fixed',
  top: 0,
  right: 0,
  width: '80vw',
  maxWidth: 350,
  height: '100vh',
  background: 'crimson',
  boxShadow: '-2px 0 16px rgba(0,0,0,0.18)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  gap: 32,
  padding: '40px 32px 32px 32px',
  zIndex: 1001,
  transition: 'right 0.3s',
  borderTopLeftRadius: 24,
  borderBottomLeftRadius: 24,
};

// Close button style
const closeButtonStyle = {
  background: 'none',
  border: 'none',
  color: '#fff',
  fontSize: 32,
  cursor: 'pointer',
  padding: 0,
};

export default Header;
