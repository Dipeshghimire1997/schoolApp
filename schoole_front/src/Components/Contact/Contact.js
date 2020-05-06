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
          <form className="col" onSubmit={handleSubmit(HandelEmail)}>
            <div className="g-row">
              <div className="m-3r">
                <label>Email :</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter a valid email"
                  ref={register({
                    required: " Email is empty",
                    pattern: {
                      value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: "Unvalid Email please try again",
                    },
                  })}
                />
              </div>
            </div>
            <div>
              {errors.email && (
                <small style={{ color: "red" }}>{errors.email.message}</small>
              )}
            </div>
            <div className="g-row">
              <div className="m-3r">
                <label>Message :</label>

                <textarea
                  name="message"
                  placeholder="Enter the message "
                  ref={register({
                    required: "The field is Empty",
                    pattern: {
                      value: /^[a-z A-Z]{10,150}$/,
                      message: "Should contain 10  alphadets",
                    },
                  })}
                ></textarea>
              </div>
            </div>
            <div>
              {errors.message && (
                <small style={{ color: "red" }}>{errors.message.message}</small>
              )}
            </div>
            <div>
              {" "}
              <button className="btn-submit">Submit</button>
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
        <div className="contact-container">
          <div className="contact-info">
            <div className="m-3r">
              <div className="contact-title">
                <h2>Messages we receive</h2>
              </div>
              <div className="msg-controller col ">
                <div>
                  the message of the inofa;lskdj asdfl;kasdf asdfjk haslkdjf
                  halksjd lkajsdfhlkajsd aklsjdfh fas dasdf asdf
                </div>
                <div>
                  the message of the inofa;lskdj asdfl;kasdf asdfjk haslkdjf
                  halksjd lkajsdfhlkajsd aklsjdfh fas dasdf asdf
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
