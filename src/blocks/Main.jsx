import "./Main.css";

export const Main = () => {
  return (
    <div className="main">
      <div className="cube-image" />

      <div className="header">
        <h1>ART IN</h1>
        <h1>Every Pixel</h1>
      </div>

      <img src="/logo.svg" alt="logo" className="logo-image" />

      <p className="description">
        Bringing Bold Ideas to Life
        <br />
        with LED Technology
      </p>

      <a href="#contact" className="scroll-down">
        <span className="scroll-text">Let’s talk</span>
        <span className="icon">
          <ArrowIcon />
        </span>
      </a>
    </div>
  );
};

const ArrowIcon = () => {
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.83337 9.25H4.08337V10.75H4.83337V9.25ZM16.5 10.75C16.9143 10.75 17.25 10.4142 17.25 10C17.25 9.58579 16.9143 9.25 16.5 9.25V10.75ZM4.83337 10.75H16.5V9.25H4.83337V10.75Z"
        fill="white"
      />
      <path
        d="M10.6667 4.16669L16.5001 10L10.6667 15.8334"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};
