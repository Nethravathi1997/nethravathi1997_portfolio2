import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#portfolio">About me</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#Techstack">Tech-Stack</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#projects">Projects</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/nethravathit/"
            target="_blank"
            className="sub"
          >
            {" "}
            - LinkdIn
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Nethravathi1997"
            target="_blank"
            className="sub"
          >
            {" "}
            - Github
          </a>
        </li>
        <li>
          <a
            href="https://drive.google.com/drive/u/2/folders/1llHj1L7gPycDsW8_L3FdpcNMRSM0XCyu"
            target="_blank"
            className="sub"
          >
            {" "}
            - Resume
          </a>
        </li>
      </ul>
    </div>
  );
}
