import shareIcon from "./images/share icon.svg";
import dots from "./images/dots-horizontal.svg";
import img from "./images/khadijah.jpg";
import cameraIcon from "./images/camera icon.svg";

function App() {
  return (
    <>
      <div className="shareBtn-container">
        <div className="tooltip">
          <div className="content">
            <p>Share Link</p>
          </div>
          <div className="bottom-center"></div>
        </div>

        <img src={shareIcon} alt="" id="share-btn" />

        <img src={dots} alt="" id="dots" />
      </div>

      <div className="image-container">
        <img src={img} alt="profileImage" id="profile__img" />

        <div className="onhover">
          <img src={cameraIcon} alt="" id="cameraIcon" />
        </div>
      </div>

      <p id="twitter">Abdulazeez_KT</p>
      <p id="slack">Khadijah</p>

      <div className="link-container"></div>
    </>
  );
}

export default App;
