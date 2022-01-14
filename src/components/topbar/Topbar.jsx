import "./topbar.scss";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Nvt.
          </a>
          <div className="itemContainer">
            {/* <PhoneIcon className="icon" /> */}
            <span>Phone : +91 966 350 5660</span>
          </div>
          <div className="itemContainer">
            {/* <EmailIcon className="icon" /> */}
            <span>Email : tnethravathi7@gmail.com</span>
          </div>
          <div className="itemContainer">
            {/* <ExternalLinkIcon className="icon" /> */}
            <a
              href="https://drive.google.com/drive/u/2/folders/1llHj1L7gPycDsW8_L3FdpcNMRSM0XCyu"
              target="_blank"
            >
              Resume
            </a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
