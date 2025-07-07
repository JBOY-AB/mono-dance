'use client'
import React from 'react'
import { FaUser, FaEnvelope, FaPhoneVolume, FaInfo, FaPencilAlt, FaPaperPlane } from 'react-icons/fa';


const Contact = () => {
  return (
    <section className="section4" id="contact">
  <img
    alt="img2"
    className="header-bottom-shape2 hide-on-mobile"
    src="../shape-top-grey-80.png"
    style={{ position: 'absolute', bottom: -1130, left: 0, width: '100%', height: '13vh', zIndex: 1 }}
  />
  <div id="sect4">
    <div className="info">
      <h2 className="h2">For More Information:</h2>
      <p className="p1">
        <strong>Hotlines: </strong>
        07035973706 & 08108112759
      </p>
      <p className="p2">
        <strong>Email: </strong> info@ijawdancecontest.ng
      </p>
      <p className="p3">
        <strong>Audition Location: </strong> Nitro Studio, Tamara Hall,
        <br />
        Otiotio Road, Yenagoa, Bayelsa state.
      </p>
    </div>
    <form className="form">
      <div className="form1">
        <div className="fdiv1">
          <div className="border mg2">
            <FaUser className="icons" />
            <input name="f.name" placeholder="Name" type="text" />
          </div>
          <div className="border mg2">
            <FaEnvelope className="icons" />
            <input name="email" placeholder="Email Address" type="email" />
          </div>
        </div>
        <div className="fdiv2">
          <div className="border mg mg2">
            <FaPhoneVolume className="icons" />
            <input name="number" placeholder="Phone" type="tel" />
          </div>
          <div className="border mg mg2">
            <FaInfo className="icons" />

            <input name="subject" placeholder="Subject" type="text" />
          </div>
        </div>
        <div className="border tarea mg2">
          <FaPencilAlt className="icons" />
          <textarea
            id="comment"
            name="comment"
            placeholder="How can we help you? Feel free to get in touch!"
            rows="4"
          />
        </div>
      </div>
    </form>
  </div>
  <button id="button2">
    <strong>
      <FaPaperPlane className="icons" /> Get in Touch
    </strong>
  </button>
  <style jsx>{`
    @media (max-width: 700px) {
      .hide-on-mobile {
        display: none !important;
      }
      #sect4 {
        flex-direction: column;
        // margin: 0 10px;
        // margin-top: 0;
        gap: 24px;
      }
      .info {
        width: 100%;
        margin-bottom: 20px;
        text-align: center;
      }
      .form1 {
        gap: 10px;
      }
      .fdiv1, .fdiv2 {
        flex-direction: column;
        gap: 10px;
      }
      .border {
        padding-bottom: 6px;
      }
      .h2 {
        font-size: 1.3rem;
      }
      .p1, .p2, .p3 {
        font-size: 1rem;
      }
      #button2 {
        width: 100%;
        padding: 16px 0;
        font-size: 1rem;
      }
    }
  `}</style>
    
</section>

  )
}

export default Contact
