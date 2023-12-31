import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


const Contact = () => {
  const [letterClass, setletterClass] = useState('text-animate')
  const form = useRef();
  

  
  useEffect(() => {
    setTimeout(() => {
      setletterClass('text-animate-hover')
    }, 2500)
  }, [])

  

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_58aoyam', 'template_fr0954e', form.current, 'jzyfQLfSvKAScB0Fl')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
            <ul>
              <li className="half">
                <input type="text" name="name" placeholder="Name" required />
              </li>
              <li className="half">
                <input type="email" name="email" placeholder="Email" required />
              </li>
              <li>
                <input
                  placeholder="Subject"
                  type="text"
                  name="subject"
                  required
                />
              </li>
              <li>
                <textarea
                  placeholder="Message"
                  name="message"
                  required
                ></textarea>
              </li>
              <li>
                <input type="submit" className="flat-button" value="SEND" />
              </li>
            </ul>
            </form>
          </div>
        </div>
        <div className='info-map'>
          Srestha Sarkar
          <br />
          India,
          <br />
          SHOPNO Neer
          G-35/A, Gitanjali Park,Kamdahari,Garia, Bramhapur, Kolkata-700096<br /> 
          <span>aniksrestha@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[22.46163, 88.37816]} zoom={30}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[22.46163, 88.37816]}>
              <Popup>Srestha lives here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer>
        </div>


      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
