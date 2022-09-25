import brandRecognition from "../url-shortening-api-master/images/icon-brand-recognition.svg";
import detailedRecords from "../url-shortening-api-master/images/icon-detailed-records.svg";
import fullyCustomizable from "../url-shortening-api-master/images/icon-fully-customizable.svg";

function Static() {
  return (
    <section className="statics">
      <div className="statHeader">
          <h1>Advanced Statistics</h1>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
      </div>
      <span className="verticalCyanLine"></span>
      <div className="static">
        <div className="imgContainer">
          <img src={brandRecognition} alt="brandRecognition" />
        </div>

        <h2>Brand Recognition</h2>
        <p>
          Boost your brand recognition with each click. Generic links don't mean
          a thing. Branded links help instil confidence in your content.
        </p>
      </div>
      <div className="static second">
        <div className="imgContainer">
          <img src={detailedRecords} alt="detailedRecords" />
        </div>

        <h2>Detailed Records</h2>
        <p>
          Gain insights into who is clicking your links. Knowing when and where
          people engage with your content helps inform better decisions.
        </p>
      </div>
      <div className="static third">
        <div className="imgContainer">
          <img src={fullyCustomizable} alt="fullyCustomizable" />
        </div>

        <h2>Fully Customizable</h2>
        <p>
          Improve brand awareness and content discoverability through
          customizable links, supercharging audience engagement.
        </p>
      </div>
    </section>
  );
}

export default Static;
