import Link from "next/link";
import "../styles/globals.css";
import "../styles/Navbar.css";
// icons
import { RiMenu3Line } from "react-icons/ri";
import { FaTimes } from "react-icons/fa";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
      <nav>
        <div className="nav-wrapper">
          <div className="logo">
            <p style={{ color: "white" }}>Khan Akhtar</p>
          </div>
          <input hidden type="radio" name="slider" id="menu-btn" />
          <input hidden type="radio" name="slider" id="close-btn" />
          <ul className="nav-links">
            <label htmlFor="close-btn" className="btn close-btn">
              <FaTimes color="white"/>
            </label>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Skills</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <label hidden htmlFor="menu-btn" className="btn menu-btn">
            <RiMenu3Line />
          </label>
        </div>
      </nav>
        {children}
      </body>
    </html>
  );
}
