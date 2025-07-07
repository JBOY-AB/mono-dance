'use client'
import React, { useState, useEffect } from 'react';
// import React from 'react';
import { FaMoneyBill, FaTrophy } from 'react-icons/fa';

const important = () => {
  return (
  <div>
  <section id="note">
    <div className="note-container">
      <div className="note-column">
        <h1>
          Important things <br />
          to note...
        </h1>
      </div>
      <div className="pricing-column">
        <FaMoneyBill style={{ color: "red", fontSize: "2rem" }} />
        <h4>Pricing</h4>
        <p>
          Audition forms are available for ₦1000
          <br /> for single contestants,
          <br />
          and ₦1500 for a group of five.
        </p>
      </div>
      <div className="price-column">
        <FaTrophy style={{ color: "red", fontSize: "2rem" }} />
        <h4>Prices</h4>
        <ul className="no-bullet">
          <li>
            <strong>1st Price:</strong> ₦2,000,000
          </li>
          <li>
            <strong>2nd Price:</strong> ₦1,000,000
          </li>
          <li>
            <strong>3rd Price:</strong> ₦500,000
          </li>
        </ul>
      </div>
    </div>
    <style jsx>{`
      @media (max-width: 700px) {
        #note {
          padding: 20px 5px;
        }
        h1 {
        font-size: 1.8rem;
        margin-right: -70px;
        }
        .note-container {
          flex-direction: column;
          gap: 24px;
          align-items: stretch;
        }
        .note-column h1 {
          font-size: 1.5rem;
          text-align: center;
        }
        .pricing-column, .price-column {
          text-align: center;
          margin: 0 auto;
        }
        .pricing-column h4, .price-column h4 {
          font-size: 1.1rem;
        }
        .no-bullet li {
          font-size: 1rem;
        }
      }
    `}</style>
  </section>
  <section id="map">
    <iframe
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.051559376202!2d6.316094377787738!3d4.931030982268803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x106a055be1dcce59%3A0xa6c5b6a97ac6c1a!2sNitro%20Studios!5e0!3m2!1sen!2sng!4v1727710227172!5m2!1sen!2sng"
      style={{
        border: "0",
      }}></iframe>
      <style jsx  >
        {`
          #map {
            width: 100%;
            height: 400px;
            
          }
          iframe {
            width: 100%;
            height: 100%;
          }
        `}
      </style>

  </section>
</div>

  )
}

export default important
