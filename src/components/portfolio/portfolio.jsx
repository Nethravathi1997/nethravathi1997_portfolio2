import "./portfolio.scss";

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1 className="head">About me</h1>

      <div className="block">
        <div className="left">
          <h2>I'm Nethravathi T,</h2>
          <p>
            Passionate and aspiring full-stack developer with a specialization
            in MERN stack. Self-motivated and curious, would like to be
            associated with a progressive organization that would foster
            creative skills and helps to grow a long with the company.
          </p>

          <br />

          <div className="acc">
            <h2 className="h2">Accomplishments</h2>
            <li className="li">NTSE - 48th Rank Holder - 2012</li>
            <li className="li">
              Organized Papyrus -State level Paper Presentation - 2019
            </li>
            <li className="li">
              District level Throw Ball and Shot put player
            </li>
            <li className="li">
              Achieved 2nd place in Taluk level Science Exhibition
            </li>
          </div>
        </div>

        {/* <div className="right">
          <img
            src="https://static.wixstatic.com/media/05c116_20dbec063bbf4c5a913e3f60973d7d60~mv2.gif/v1/fill/w_450,h_276,al_c,q_90/file.jpg"
            alt=""
          />
        </div> */}
      </div>
    </div>
  );
}
