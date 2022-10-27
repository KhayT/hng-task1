import shareIcon from "./images/share icon.svg";
import dots from "./images/dots-horizontal.svg";

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
    </>
  );
}

export default App;
