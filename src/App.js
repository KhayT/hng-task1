import Links from "./components/Link";

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

      <div className="link-container">
        <Links
          url="https://twitter.com/Abdulazeez_KT"
          title="Twitter Link"
          id="twiter-link"
        />

        <Links
          url="https://training.zuri.team/"
          title="Zuri Team"
          id="btn__zuri"
        />

        <Links url="http://books.zuri.team" title="Zuri Books" id="books" />

        <Links
          url="http://books.zuri.team"
          title="Python Books"
          id="book__python"
        />

        <Links
          url="https://background.zuri.team"
          title="Background Check for Coders"
          id="pitch"
        />

        <Links
          url="https://books.zuri.team/design-rules"
          title="Design Books"
          id="book__design"
        />
      </div>
    </>
  );
}

export default App;
