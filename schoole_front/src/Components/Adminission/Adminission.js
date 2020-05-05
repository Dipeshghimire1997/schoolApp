import React from "react";

let Adminission = (props) => {
  return (
    <div className="application-form-page ">
      {/* the header  */}
      <div className="row space-around">
        <div>Logo</div>
        <div className="center">
          <h1>CHAMPS WORLD</h1>
          <div>Dallu , Chagal , Kathmandu</div>
          <div>9849180494/9808581308</div>
          <div>
            FaceBook ID :
            <a href="https://www.facebook.com/champswordl">
              facebook.com/champswordl
            </a>
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

            {/* 5 */}
            <div className="g-row">
              <div>
                <label>Religion : </label>
                <input name="religion" type="text" />
              </div>
            </div>

            {/* 6 */}
            <div className="g-row ">
              <div className="col border-all">
                <span style={{ alignSelf: "center " }}> Father</span>
                <div>
                  <label>Name : </label>
                  <input name="fName" type="text" />
                </div>
                <div>
                  <label>Occupation : </label>
                  <input name="fOccupation" type="text" />
                </div>
                <div>
                  <label>Mobole No : </label>
                  <input name="fMoboleNo" type="text" />
                </div>
                <div>
                  <label>Off. No : </label>
                  <input name="fOffNo" type="text" />
                </div>
              </div>
              <div className="col border-all">
                <span style={{ alignSelf: "center " }}> Mother</span>
                <div>
                  <label>Name : </label>
                  <input name="mName" type="text" />
                </div>
                <div>
                  <label>Occupation : </label>
                  <input name="mOccupation" type="text" />
                </div>
                <div>
                  <label>Mobole No : </label>
                  <input name="mMoboleNo" type="text" />
                </div>
                <div>
                  <label>Off. No : </label>
                  <input name="mOffNo" type="text" />
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
            </div>
          </div>
        </div>

        <div className=" border-all">
          <div
            className="col"
            style={{ marginTop: "1rem", marginBottom: "1rem" }}
          >
            <div>
              <div>
                <label>Place :</label>
                <input type="text" name="place" />
              </div>
              <div>
                <input type="checkbox" />
                <label>
                  I declare that the details mentioned above about my child are
                  true . I shall abide by the rule & refulations of the schoole
                </label>
              </div>
              <div>
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Adminission;
{
  /* <div className="g-row">
          <div>
            <label></label>
            <input name = "" type =""/>
          </div>
        </div> */
}
