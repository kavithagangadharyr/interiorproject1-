import React from 'react';
import './footer.css';
import ilogo from '../images/ilogo.png';
import flogo from '../images/flogo.png';
import tlogo from '../images/tlogo.png';
import OIP from '../images/OIP.jpg';

function Footer() {
  const handleClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4>Contact Us</h4>
            
            <ul className="list-unstyled">
            <img src={OIP} alt="logo"style={{ height: '50px', width: '50px' }} />
              <li><i className="fa fa-map-marker"></i> interno,gandhi chowk,iscon,ahmedabad,301910.</li>
              <li><i className="fa fa-phone"></i> (123) 456-7890</li>
              <li><i className="fa fa-envelope"></i> info@example.com</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4>Connect with Us</h4>
            <ul className="list-inline social-buttons">
            <li><button className="social-button" onClick={() => handleClick('https://www.facebook.com/')}><img src={flogo} alt="Facebook Logo" style={{ height: '30px', width: '30px' }} /></button></li>
<li><button className="social-button" onClick={() => handleClick('https://www.instagram.com/')}><img src={ilogo} alt="Instagram Logo" style={{ height: '30px', width: '30px' }} /></button></li>
<li><button className="social-button" onClick={() => handleClick('https://www.twitter.com/')}><img src={tlogo} alt="Twitter Logo" style={{ height: '30px', width: '30px' }} /></button></li>
</ul>

          </div>
          <div className="col-md-4">
            <h4>More Links</h4>
            <ul className="list-unstyled">
              <li><a href="Hero">Pages</a></li>
              
              <li><a href="Services">Style Guide</a></li>
              <li><a href="Protected">Protected</a></li>
              <li><a href="Licenses">Licenses</a></li>
              <li><a href="Changelog">Changelog</a></li>
              <li><a href="#" onClick={() => alert('The page you requested was not found.')}>404</a></li>

            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p className="text-center">&copy; 2022 My Interior Design Studio. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
