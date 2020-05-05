import React from "react";
import { useForm } from "react-hook-form";
import back from "../../Assets/Images/undraw_directions_x53j.svg";

export default function Contact() {
  const { register, handleSubmit, errors } = useForm();
  let HandelEmail = (data) => {
    console.log(data);
  };
  return (
    <div className="col">
      <div className="g-row">
        {/* image container */}
        <div className="img-container">
          <div>
            <img src={back} />
          </div>
        </div>

        <div>
          <h1>Contact Us</h1>
          <form className="col">
            <div className="g-row">
              <div>
                <label>Email :</label>
                <input type="email" name="emil" />
              </div>
            </div>
            <div>
              <span className="error-msg">The error message</span>
            </div>
            <div className="g-row">
              <div>
                <label>Message :</label>

                <textarea
                  name="message"
                  placeholder="Enter the message "
                ></textarea>
              </div>
            </div>
            <div>
              <span className="error-msg">Error message</span>
            </div>
            <div>
              {" "}
              <button>Submit</button>
            </div>
          </form>
        </div>
      </div>

      <div className="g-row">
        <div className="contact-container">
          <div className="contact-info">
            <div className="m-3r">
              <div className="contact-title">
                <h2>You Can Also Contact Us By</h2>
              </div>
              <div className="contact-body">
                <div>
                  <span>Email :</span> "emial@email.com"
                </div>
                <div>
                  <span>phone no :</span>
                  "phone no "
                </div>
                <div>
                  <span>Address :</span>
                  this is the addresd
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="contact-container">
            <div className="contact-info">
              <div className="m-3r">
                <div className="contact-title">
                  <h2>You Can Also Contact Us By</h2>
                </div>
                <div className="contact-body">
                  <div>
                    <span>Email :</span> "emial@email.com"
                  </div>
                  <div>
                    <span>phone no :</span>
                    "phone no "
                  </div>
                  <div>
                    <span>Address :</span>
                    this is the addresd
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
