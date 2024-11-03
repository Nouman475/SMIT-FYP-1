import React from "react";
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import cold from '../../Assets/cold.png'
const Footer = () => {
  const socialLinks = [
    { 
      icon: <FacebookOutlined />,
      link: "https://www.facebook.com",
      alt: "Facebook",
    },
    {
      icon: <InstagramOutlined />,
      link: "https://www.instagram.com",
      alt: "Instagram",
    },
    {
      icon: <TwitterOutlined />,
      link: "https://www.twitter.com",
      alt: "Twitter",
    },
    {
      icon: <YoutubeOutlined />,
      link: "https://www.youtube.com",
      alt: "YouTube",
    },
  ];

  return (
    <footer className="footer" style={{ background: "rgba(0, 47, 52, .03)" }}>
      <div className="container-fluid">
        <div className="row" id="upper" >
          <div className="col-6 d-flex justify-content-end align-items-center">
            <p className="fs-4">Chill and drink with us,</p>
            <img
              src={cold}
              height={200}
              alt="olx-banner"
            />
          </div>
          <div
            className="col-6 d-flex justify-content-center group"
            id="border"
          >
            <p>Also try our app today</p>
            <div className="d-flex">
              <a href="/" tabIndex="0">
                <img
                  className="bn45"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
                  alt="Google Play"
                />
              </a>
              <a href="/" tabIndex="0">
                <img
                  className="bn46"
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="App Store"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="footer">
          
          <div className="footer__addr">
            <div className="nav__title">Follow us</div>
            <div
              style={{
                display: "flex",
                gap: "5px",
                
                margin: "20px 0",
              }}
            >
              {socialLinks.map((social) => (
                <a
                  key={social.alt}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    backgroundColor: "#f0f0f0",
                    textDecoration: "none",
                    color: "#000",
                    transition: "background-color 0.3s",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.backgroundColor = "#e0e0e0")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.backgroundColor = "#f0f0f0")
                  }
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="d-flex">
              <a href="/" tabIndex="0">
                <img
                  className="bn45"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
                  alt="Google Play"
                />
              </a>
              <a href="/" tabIndex="0">
                <img
                  className="bn46"
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="App Store"
                />
              </a>
            </div>
          </div>

          <div className="legal px-3 container-fluid" style={{backgroundColor:"#002f34;" ,color:"#fffff"}}>
            <p className="text-white mt-3">&copy; {new Date().getFullYear()} All rights reserved.</p>
            <div className="legal__links">
              <span>
                Made with <span className="heart">♥</span> By M Nouman The Developer
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
