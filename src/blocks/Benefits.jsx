import weatherIcon from "../assets/icons/weather.svg";
import sizeIcon from "../assets/icons/size.svg";
import eyeIcon from "../assets/icons/eye.svg";
import cameraIcon from "../assets/icons/camera.svg";
import shapeIcon from "../assets/icons/shape.svg";

import "./Benefits.css";

const benefits = [
  {
    image: weatherIcon,
    title: "Weather Resistant",
    subtitle: "Engineered to perform reliably in diverse climates",
  },
  {
    image: sizeIcon,
    title: "Customizable Sizes",
    subtitle: "Adaptable to fit any outdoor space or requirements",
  },
  {
    image: eyeIcon,
    title: "High Visibility",
    subtitle: "Bright displays that maintain clarity even in direct sunlight",
  },
  {
    image: cameraIcon,
    title: "Energy Efficient",
    subtitle: "Designed to consume less power without compromising performance",
  },
];

export const Benefits = () => {
  return (
    <div className="benefits">
      <h2>Custom LED displays for any space, any occasion</h2>

      <div className="benefits-content">
        <div className="left-part">
          <div className="group-one">
            {benefits.slice(0, 2).map((benefit) => (
              <BenefitBlock key={benefit.title} {...benefit} />
            ))}
          </div>

          <div className="group-two">
            {benefits.slice(2, 4).map((benefit) => (
              <BenefitBlock key={benefit.title} {...benefit} />
            ))}
          </div>
        </div>

        <div className="right-part">
          <img src={shapeIcon} className="house-shape" />

          <p>Indoor LED Screens</p>
        </div>
      </div>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const BenefitBlock = ({ image, title, subtitle }) => {
  return (
    <div className="benefit-block">
      <img className="benefit-icon" src={image} />

      <div className="benefit-content">
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};
