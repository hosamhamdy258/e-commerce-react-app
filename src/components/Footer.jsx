import React from "react";
import Ratio from "react-bootstrap/Ratio";
import * as Icon from "react-bootstrap-icons";

export default function Footer() {
  return (
    <>
      <footer id="footer">
        <section id="contact-us" className="bg-light container-fluid">
          <div className="container-fluid row m-auto">
            <div className="col-12 col-md-6 m-auto pb-4">
              <div className="pb-3 pb-2">
                <h2>Contact Us</h2>
              </div>
              <p>
                <strong>Address:</strong> Stad Al Gamaa, Stadium St, Al
                Meseilhah, Shibin el Kom, Menofia, Egypt
              </p>
              <p>
                <strong>Phone:</strong>(+202) 353-55628
              </p>
              <p>
                <strong>Hours:</strong> 9:00 - 16:00 Sat-Thur
              </p>
              <div className="follow">
                <h5>Follow Us</h5>
                <a href="">
                  <Icon.Instagram />
                </a>
                <a href="">
                  <Icon.Twitter />
                </a>
                <a href="">
                  <Icon.Facebook />
                </a>
                <a href="">
                  <Icon.Youtube />
                </a>
              </div>
            </div>
            <div className="col-12 col-md-6 m-auto">
              <Ratio aspectRatio="16x9">
                <embed
                  type="image/svg+xml"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d440806.19780521165!2d31.293468481398186!3d30.328251102556962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7d7223ff2d63f%3A0x9d531b61c0ebb81b!2sITI%20Menofia%20Branch!5e0!3m2!1sar!2seg!4v1651625868550!5m2!1sar!2seg"
                />
              </Ratio>
            </div>
          </div>
        </section>
        <section
          id="cpright"
          className="col-12 bg-dark  text-light text-center fixed-bottom"
        >
          <p> © 2022.iTi etc All Rights Reserved </p>
        </section>
      </footer>
      <audio id="myAudio">
        <source src="../imgs/mixkit-select-click-1109.wav" type="audio/wav" />
      </audio>
    </>
  );
}
