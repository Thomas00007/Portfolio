import { useState } from "react";

function DropdownDownload() {
  const [open, setOpen] = useState(false);

  return (
    <div className="dropdown-download">
  <button
    className="dropdown-btn"
    onClick={() => setOpen(v => !v)}
  >
    Pobierz CV
  </button>

  <ul className={`dropdown-menu ${open ? "open" : ""}`}>
    <li className="cursor-hoverable">
      <a href="./cv/Tomasz-Nowak-CV.pdf" download  onClick={() => setOpen(false)}>
        <img src="assets/images/poland.png" alt="PL" />
        Wersja Polska
      </a>
    </li>
    <li className="cursor-hoverable">
      <a href="./cv/Tomasz-Nowak-CV-English.pdf" download onClick={() => setOpen(false)}>
        <img src="assets/images/english.png" alt="EN" />
        Wersja Angielska
      </a>
    </li>
  </ul>
</div>

  );
}

export default DropdownDownload;
