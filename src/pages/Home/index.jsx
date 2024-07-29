import { FaGifts } from "react-icons/fa";
import { useTheme } from "~/layouts/ThemeContext";

import Newsletter from "./Newsletter";
import GoogleCard from "./GoogleCard";
import PriceCard from "./PriceCard";
import NewsCard from "./NewsCard";
import ImageSlider from "./ImageSlider";
import FaQ from "./FaQ";
import TradeBanner from "./TradeBanner";

function Home() {
  const { isDarkTheme, toggleTheme } = useTheme();
  const themeClass = isDarkTheme
    ? "text-bg-dark bg-dark"
    : "text-bg-light bg-body";
  return (
    <>
      <div className={themeClass}>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="display-3 font-weight-bold">
                <p className="text-warning">5</p>
                <p>USERS</p>
                <p>TRUST US</p>
              </div>
              <Newsletter />
              <p></p>
              <h5>
                <FaGifts /> Register now to benefited from our newest reward loyalty program
              </h5>
              <br></br>
              <p>
                <small>Or Connect With</small>
              </p>
              <GoogleCard />
            </div>
            <div className="col-lg-6">
              <NewsCard />
            </div>
          </div>
        </div>
        <br></br>
        <div className="container">
          <div className="row">
            <ImageSlider />
          </div>
        </div>
        <br></br>

        <div className="container">
          <hr></hr>
          <TradeBanner />
        </div>
        <br></br>
      </div>
    </>
  );
}

export default Home;
