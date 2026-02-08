import { useState } from "react"
import { getLang, setLang, getString, getArray } from "../language/settings";
import { RiArrowDropDownLine } from "react-icons/ri";

function ChangeLanguage({ type = "desktop" }) {
  const [isOpen, setIsOpen] = useState(false);

  const isMobile = type === "mobile";

  return (
    <div className={`dropdown ${isMobile ? "dropdown-mobile" : "dropdown-desktop"}`}>
      <div className="dropdown-btn cursor-hoverable" onClick={() => setIsOpen((prev) => !prev)}>
        {getLang() === "pl" ? "Polski" : "English"}
        <span className={isOpen ? "active" : ""}><RiArrowDropDownLine /></span>
      </div>

      <ul className={`dropdown-content ${isOpen ? "active" : ""}`}>
        {getLang() === "pl" ? (
          <li className="cursor-hoverable" onClick={() => { setLang("en"); setIsOpen(false);}}>
            <img src="assets/images/english.png" alt="English" /> English
          </li>
        ) : (
          <li className="cursor-hoverable" onClick={() => { setLang("pl"); setIsOpen(false); }}>
            <img src="assets/images/poland.png" alt="Polski" /> Polski
          </li>
        )}
      </ul>
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
        <nav id='navbar'>
            <a  className="logo" href='#'>{getString("navbar.logo")}</a>

            <ul className="desktop-links">
              {getArray("navbar.menu", []).map((item) => (
                <li key={item.name}><a href={item.url}>{item.name}</a></li>
              ))}
            </ul>
            
            <div>
              <ChangeLanguage type="desktop" />

              <button className={`hamburger ${open ? "active" : ""}`} onClick={() => setOpen(!open)}>
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>

            <div className={`mobile-menu ${open ? "open" : ""}`}>
              <ul className="mobile-links">
                {getArray("navbar.menu", []).map((item) => (
                  <li key={item.name}><a href={item.url}>{item.name}</a></li>
                ))}
                <ChangeLanguage type="mobile" />
              </ul>

            </div>
        </nav>
    </>
  )
}

export default Navbar
