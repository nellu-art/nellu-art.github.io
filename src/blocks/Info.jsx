import "./Info.css";
import pitchSvg from "../assets/icons/pitch.svg";

export const Info = () => {
  return (
    <div className="info-block">
      <h2>What’s pixel pitch &&nbsp;why should I care?</h2>

      <div className="info-content">
        <img src={pitchSvg} alt="pitch-image" className="pitch-image" />
        <div className="info-text">
          <p>
            Pixel pitch is&nbsp;the distance between the&nbsp;centers
            of&nbsp;two neighboring pixels on&nbsp;a&nbsp;screen, usually
            measured in&nbsp;millimeters.
          </p>

          <p>
            Why does this matter? The tighter the pitch (or&nbsp;smaller the
            number) the closer you can view the wall without visual distortion.
          </p>

          <p>
            Which Pixel Pitch you choose should be&nbsp;based on&nbsp;the
            distance of&nbsp;the nearest viewer to&nbsp;the screen.
          </p>
        </div>
      </div>
    </div>
  );
};
