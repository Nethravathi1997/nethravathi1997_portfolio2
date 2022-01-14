import React from "react";
import "./contact.scss";
// import { useState } from "react";
// import emailjs from "emailjs"

export default function Contact() {
  // const [message, setMessage] = useState(false);
  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_tlrcd7a",
  //       "template_u5hrkvb",
  //       e.target,
  //       "user_7JuWNS2FgHTZqUXyWrPTO"
  //     )
  //     .then((res) => {
  //       alert("successfull");
  //     })
  //     .catch((err) => alert(err));
  // };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <h1>Contact</h1>
        <div className="logo">
          <a href="https://github.com/Nethravathi1997" target="_blank">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzpUN6yhPjDbIPLhCSEXdnqaBqCj4IYrrbHw&usqp=CAU"
              alt=""
            />
          </a>
          <a href="https://www.linkedin.com/in/nethravathit/" target="_blank">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png"
              alt=""
            />
          </a>
          <a href="https://accounts.google.com/signin/v2/identifier?hl=en&continue=https%3A%2F%2Fmail.google.com&service=mail&ec=GAlAFw&flowName=GlifWebSignIn&flowEntry=AddSession" target="_blank">
            <img
              src="https://cdn4.iconfinder.com/data/icons/free-colorful-icons/360/gmail.png"
              alt="" className="mail"
            />
          </a>
        </div>


      <div className="mobile">
      <a href="https://github.com/Nethravathi1997" target="_blank">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzpUN6yhPjDbIPLhCSEXdnqaBqCj4IYrrbHw&usqp=CAU"
              alt=""
            />
          </a>
          <a href="https://www.linkedin.com/in/nethravathit/" target="_blank">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png"
              alt=""
            />
          </a>
          <a href="https://accounts.google.com/signin/v2/identifier?hl=en&continue=https%3A%2F%2Fmail.google.com&service=mail&ec=GAlAFw&flowName=GlifWebSignIn&flowEntry=AddSession" target="_blank">
            <img
              src="https://cdn4.iconfinder.com/data/icons/free-colorful-icons/360/gmail.png"
              alt="" className="mail"
            />
          </a>

          <br />
          <br />

      </div>

        <div className="down">
          <img
            src="https://saibababank.com/assets/img/Data/icon_03-Contact-1.gif"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
