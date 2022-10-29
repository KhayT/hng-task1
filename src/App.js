import Links from "./components/Link";
import Footer from "./components/Footer";

import shareIcon from "./images/share icon.svg";
import dots from "./images/dots-horizontal.svg";
import img from "./images/khadijah.jpg";
import cameraIcon from "./images/camera icon.svg";
import slackIcon from "./images/slack.jpg";
import githubIcon from "./images/github.jpg";

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
      <p id="slack">KhayT</p>

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
          url="https://books.zuri.team/python-for-beginners?ref_id=<khayt>"
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

      <div className="icons-container">
        <a href="https://slack.com" target="blank">
          <img src={slackIcon} alt="" />
        </a>

        <a href="https://github.com/khayt" target="blank">
          <img src={githubIcon} alt="" />
        </a>
      </div>

      <Footer />
    </>
  );
}

export default App;
