import alexJpg from "../assets/icons/alex.jpeg";

import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer" id="contact">
      <h2>Looking to Purchase an LED Screen?</h2>

      <div className="footer-content">
        <div>
          <img src={alexJpg} alt="Alex Menzatov" className="footer-image" />
        </div>

        <div className="footer-text">
          <p>For more details or&nbsp;to place an order, please contact us</p>

          <div className="contact">
            <p className="contact-name">Oleksii Menzatov</p>
            <a href="tel:+380980430707" className="contact-info">
              <span className="icon">
                <PhoneCall />
              </span>
              <p> +380980430707</p>
            </a>
            <a href="mailto:stereoua@gmail.com" className="contact-info">
              <span className="icon">
                <MailIcon />
              </span>
              <p>stereoua@gmail.com</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const MailIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      transform="scale(0.8)"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  );
};

const PhoneCall = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      transform="scale(0.8)"
    >
      <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
  );
};
