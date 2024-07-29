import { Link } from "react-router-dom";
import { images } from "~/assets";
import { useTheme } from "../../ThemeContext";
import NFTMintButton from "./NFTMint"; // Assuming NFTMint.jsx is in the same folder

// eslint-disable-next-line react/prop-types
function Header() {
  const { isDarkTheme, toggleTheme } = useTheme();
  const themeClass = isDarkTheme
    ? "navbar-dark bg-dark"
    : "navbar-light bg-light";

  return (
    <nav className={`navbar navbar-expand-lg ${themeClass}`}>
      <div className="container">
        <Link
          className="navbar-brand fw-bold fs-1"
          to="/"
          style={{
            color: "#169bfa",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={"https://i.gyazo.com/09d43dcaa09861ae87d8e723948011f8.png"}
            alt="Logo"
            style={{
              height: "60px",
              width: "150px",
              marginRight: "5px",
            }}
          />
        </Link>

        {/* Settings Icon Button for Smaller Screens */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/trade">
                Product
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">
                Profile
              </Link>
            </li>
            <li className="nav-item" onClick={toggleTheme}>
              <button className="nav-link">Toggle Theme</button>
            </li>
            <li className="nav-item">
              <NFTMintButton /> {/* Include the NFTMintButton component */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
