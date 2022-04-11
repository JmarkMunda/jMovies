import React from "react";
import { BsGithub, BsYoutube, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <div>
        <div>
          <BsGithub className="footer-icons" />
          <BsYoutube className="footer-icons" />
          <BsTwitter className="footer-icons" />
        </div>
        <p>Created by: Jay Mark Munda</p>
        <p>Copyright © 2022</p>
      </div>
      <ul>
        <li>FAQ</li>
        <li>Terms of use</li>
        <li>Help Center</li>
        <li>Ways to watch</li>
      </ul>
      <ul>
        <li>Most popular</li>
        <li>Upcoming</li>
        <li>Trending</li>
        <li>Top Rated</li>
      </ul>
      <ul>
        <li>About us</li>
        <li>Support</li>
        <li>Contact us</li>
        <li>Forums</li>
        <li>Advertise</li>
        <li>Device</li>
      </ul>
    </footer>
  );
};

export default Footer;
