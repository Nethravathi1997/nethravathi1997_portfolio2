import "./projects.scss";

export default function Projects() {
  return (
    <div className="projects" id="projects">
      <h1> My Projects</h1>

      <div className="container">
        <div className="item">
          <h3>Porter.com</h3>
          <img
            src="https://entrackr.com/wp-content/uploads/2020/11/porter-.jpg"
            alt=""
          />
          <div className="description">
            <h4>Description</h4>
            <p>
              The website works in shifting the places, provides transport
              facilities
            </p>
          </div>
          <div className="features">
            <h4>Features</h4>
            <p>
              The Project includes Location-based vehicle gallery, User
              authentication, Auto-detection of location
            </p>
          </div>

          <div className="techstack">
            <h4>Tech-Stack</h4>
            <br />
            <h5>HTML | CSS | Javascript | MongoDb | Express | Mongoose</h5>
          </div>

          <div className="btn">
            <h4>
              <a
                href="https://github.com/stockchandu/Project-Porter-v2"
                target="_blank"
              >
                CODE
              </a>
            </h4>
            <h4>
              <a href="https://porter-logistics.herokuapp.com/" target="_blank">
                DEMO
              </a>
            </h4>
          </div>
        </div>

        <div className="item">
          <h3>Shop.com</h3>
          <img
            src="https://img.shop.com/Image/images/shopcom/shop-s-logo-1200x630.jpg"
            alt=""
          />
          <div className="description">
            <h4>Description</h4>
            <p>
              This is the Shopping Website where the products are sold and
              purchased
            </p>
          </div>
          <div className="features">
            <h4>Features</h4>
            <p>
              The developed site includes Social Sign-in/Sign-up, Product-based
              search, User authentication
            </p>
          </div>

          <div className="techstack">
            <h4>Tech-Stack</h4>
            <br />
            <h5>HTML | CSS | Javascript</h5> <br />
          </div>

          <div className="btn">
            <h4>
              <a
                href="https://github.com/masai-course/nethravathi_fw11_133/tree/master/unit-3/sprint-4/optional/shop.com"
                target="_blank"
              >
                CODE
              </a>
            </h4>
            <h4>
              <a
                href="https://shop-clone-gabr0crnj-nethravathi1997.vercel.app/"
                target="_blank"
              >
                DEMO
              </a>
            </h4>
          </div>
        </div>

        <div className="item">
          <h3>Myntra.com</h3>
          <img
            src="https://ship.shoppre.com/wp-content/uploads/2019/04/myntra.jpg"
            alt=""
          />
          <div className="description">
            <h4>Description</h4>
            <p>
              Myntra is the Shopping Website where the products are sold and
              purchased
            </p>
          </div>

          <div className="features">
            <h4>Features</h4>
            <p>
              The site includes user SignIn/SignUp, Product Based Gallery, Cart
              functionalities with backend
            </p>
          </div>

          <div className="techstack">
            <h4>Tech-Stack</h4>
            <br />
            <h5>HTML | CSS | Javascript | MongoDb | Express | Postman</h5>
          </div>

          <div className="btn">
            <h4>
              <a
                href="https://github.com/nkil123/MyntraFullStack"
                target="_blank"
              >
                CODE
              </a>
            </h4>
            <h4>
              <a
                href="https://mysterious-depths-64439.herokuapp.com/"
                target="_blank"
              >
                DEMO
              </a>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
