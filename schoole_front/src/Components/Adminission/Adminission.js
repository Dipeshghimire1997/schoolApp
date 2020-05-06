import React from "react";

let Adminission = (props) => {
  return (
    <div className="application-form-page ">
      {/* the header  */}
      <div className="g-row space-around">
        <div>Logo</div>
        <div className="center">
          <h1>CHAMPS WORLD</h1>
          <div>Dallu , Chagal , Kathmandu</div>
          <div>9849180494/9808581308</div>
          <div>
            or <a href="https://www.facebook.com/champsworld1">FaceBook</a>
          </div>
        </div>
        <div>Image</div>
      </div>
      {/* appolcation info */}
      <div className="m-3r">
        <center>
          <h1>APPLICANT FORM</h1>
          To Be Filled by Parent or Guardian In Capital Letters Only
        </center>
      </div>

      {/* form start */}
      <form>
        <div className="border-all">
          <div className="col" style={{ marginTop: "1rem" }}>
            {/* 0 */}
            <div className="g-row">
              <div>
                <label>Class Applied For :</label>{" "}
                <input name="classApplied" type="text" />
              </div>
              <div>
                <label>S.No :</label>
                <input name="s.no" type="number" />
              </div>
            </div>
            <div className="g-row">
              <div>
                <small>Error message</small>
              </div>
              <div>
                <small>Error message</small>
              </div>
            </div>
            {/* 1 */}
            <div className="g-row">
              <div>
                <label>Name of Pupil</label>
                <input name="namePupil" type="text" />
              </div>
              <div className="row space-around">
                <div>
                  <label>Girl : </label>
                  <input name="gender" type="radio" value="girl" />
                </div>
                <div>
                  <label>Boy : </label>
                  <input name="gender" type="radio" value="boy" />
                </div>
                <div>
                  <label>Other : </label>
                  <input name="gender" type="radio" value="other" />
                </div>
              </div>
            </div>

            <div className="g-row">
              <div>
                <small className="error-msg">Error message</small>
              </div>
              <div>
                <small className="error-msg">Error message</small>
              </div>
            </div>
            {/* 2 */}
            <div className="g-row">
              <div>
                <label>Date Of Birth</label>
                <input name="dob" type="date" />
              </div>
            </div>
            {/* 3 */}
            <div className="g-row">
              <div>
                <label>Place Of Birth : </label>
                <input name="placedob" type="text" />
              </div>
              <div>
                <label>Nationality : </label>
                <input name="nationality" type="text" />
              </div>
            </div>
            <div className="g-row">
              <div>
                <small className="error-msg">Error message</small>
              </div>
              <div>
                <small className="error-msg">Error message</small>
              </div>
            </div>

            {/* 5 */}
            <div className="g-row">
              <div>
                <label>Religion : </label>
                <input name="religion" type="text" />
              </div>
            </div>
            <div className="g-row">
              <div>
                <small className="error-msg">Error message</small>
              </div>
            </div>

            {/* 6 */}
            <div className="g-row ">
              <div className="col border-all">
                <label style={{ alignSelf: "center " }}> Father</label>
                <div>
                  <label>Name : </label>
                  <input name="fName" type="text" />
                </div>
                <div>
                  <small className="error-msg">Error message</small>
                </div>

                <div>
                  <label>Occupation : </label>
                  <input name="fOccupation" type="text" />
                </div>
                <div>
                  <small className="error-msg">Error message</small>
                </div>
                <div>
                  <label>Mobile No : </label>
                  <input name="fMobileNo" type="text" />
                </div>
                <div>
                  <small className="error-msg">Error message</small>
                </div>
                <div>
                  <label>Off. No : </label>
                  <input name="fOffNo" type="text" />
                </div>
                <div>
                  <small className="error-msg">Error message</small>
                </div>
              </div>
              <div className="col border-all">
                <label style={{ alignSelf: "center " }}> Mother</label>
                <div>
                  <label>Name : </label>
                  <input name="mName" type="text" />
                </div>
                <div>
                  <small className="error-msg">Error message</small>
                </div>
                <div>
                  <label>Occupation : </label>
                  <input name="mOccupation" type="text" />
                </div>
                <div>
                  <small className="error-msg">Error message</small>
                </div>
                <div>
                  <label>Mobile No : </label>
                  <input name="mMobileNo" type="text" />
                </div>
                <div>
                  <small className="error-msg">Error message</small>
                </div>
                <div>
                  <label>Off. No : </label>
                  <input name="mOffNo" type="text" />
                </div>
                <div>
                  <small className="error-msg">Error message</small>
                </div>
              </div>
            </div>
            {/* form end */}

            {/* 7 */}
            <div className="g-row" style={{ marginTop: "1rem" }}>
              <div>
                <label>Full Address :</label>
                <input type="text" name="pFAddress" />
              </div>
            </div>
            <div>
              <small className="error-msg">Error message</small>
            </div>
            <div>
              <label>Details Of Guardian</label>
              <div className="g-row">
                <div>
                  <label>Name : </label>
                  <input name="gName" type="text" />
                </div>
                <div>
                  <label>Full Address : </label>
                  <input name="fAddress" type="text" />
                </div>
                <div>
                  <label>Contact Nos :</label>
                  <input name="allContactNo" type="text" />
                </div>
              </div>
              <div className="g-row">
                <div>
                  <small className="error-msg">Error message</small>
                </div>
                <div>
                  <small className="error-msg">Error message</small>
                </div>
                <div>
                  <small className="error-msg">Error message</small>
                </div>
              </div>
            </div>

            {/* 8 */}
            <div>
              <label>Medical History Of The Student</label>
              <div className="g-row">
                <div>
                  <label>Blood Group :</label>
                  <input name="bloodGroup" type="text" />
                </div>
                <div>
                  <label>Vaccinations :</label>
                  <input name="vaccinationsTaken" type="text" />
                </div>
                <div>
                  <label>Any Allergies:</label>
                  <input name="anyAllergies" type="text" />
                </div>
              </div>
              <div className="g-row">
                <div>
                  <small className="error-msg">Error message</small>
                </div>
                <div>
                  <small className="error-msg">Error message</small>
                </div>
                <div>
                  <small className="error-msg">Error message</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" border-all">
          <div
            className="col"
            style={{ marginTop: "1rem", marginBottom: "1rem" }}
          >
            <div>
              <div className="g-row">
                <div>
                  <label>Place :</label>
                  <input type="text" name="place" />
                </div>
              </div>
              <div className="g-row">
                <div>
                  <small className="error-msg">Error message</small>
                </div>
              </div>

              <div>
                <input type="checkbox" className="w3-check" />
                <label style={{ marginLeft: "1rem" }}>
                  I declare that the details mentioned above about my child are
                  true . I shall abide by the rule & regulations of the schoole
                </label>
              </div>
              <div>
                <small>Error message</small>
              </div>
              <div>
                <button className="btn-submit">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Adminission;