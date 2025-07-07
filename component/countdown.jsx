'use client'
import React, { useState, useEffect } from 'react'

const getTimeLeft = (targetDate) => {
  const now = new Date().getTime()
  const distance = targetDate - now
  if (distance <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }
  const days = Math.floor(distance / (1000 * 60 * 60 * 24))
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((distance % (1000 * 60)) / 1000)
  return { days, hours, minutes, seconds }
}

const Countdown = () => {
  const auditionDate = new Date('2025-08-01T12:00:00').getTime()
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(auditionDate))
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(auditionDate))
    }, 1000)
    return () => clearInterval(timer)
  }, [auditionDate])

  if (!mounted) return null

  return (
    <section className="countdown" id="countdown">
      <h2 className="section-title">Countdown to the Audition</h2>
      <div className="countdown-timer">
        <div className="timer-item">
          <span className="timer-value" id="days">
            {String(timeLeft.days).padStart(2, '0')}
          </span>
          <span className="underline">___</span>
          <span className="timer-label">Days</span>
        </div>
        <span className="colon">:</span>
        <div className="timer-item">
          <span className="timer-value" id="hours">
            {String(timeLeft.hours).padStart(2, '0')}
          </span>
          <span className="underline">___</span>
          <span className="timer-label">Hours</span>
        </div>
        <span className="colon hide-on-mobile-colon">:</span>
        <div className="timer-item">
          <span className="timer-value" id="minutes">
            {String(timeLeft.minutes).padStart(2, '0')}
          </span>
          <span className="underline">___</span>
          <span className="timer-label">Minutes</span>
        </div>
        <span className="colon">:</span>
        <div className="timer-item">
          <span className="timer-value" id="seconds">
            {String(timeLeft.seconds).padStart(2, '0')}
          </span>
          <span className="underline">___</span>
          <span className="timer-label">Seconds</span>
        </div>
      </div>

      <img
        alt="Shape top white"
        className="header-top-grey hide-on-mobile"
        id="greytop"
        src="../shape-top-grey-80.png"
      />

      {/* Mobile responsiveness */}
      <style jsx>{`
        @media (max-width: 700px) {
          .hide-on-mobile {
            display: none !important;
          }
          .hide-on-mobile-colon {
            display: none !important;
          }
        }
      `}</style>

      {/* 🌙 Dark Mode Support */}
      <style jsx global>{`
        body.dark .countdown {
          background-color: #121212;
          color: white;
        }

        body.dark .countdown-timer .timer-value,
        body.dark .countdown-timer .timer-label,
        body.dark .countdown-timer .colon,
        body.dark .countdown-timer .underline {
          color: white;
        }

        body.dark .countdown .section-title {
          color: #ffffff;
        }
      `}</style>
    </section>
  )
}

export default Countdown
