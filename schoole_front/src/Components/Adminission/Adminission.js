import React from "react";

export default function Adminission() {
  return (
    <div className="col">
      <div className="row space-around center">
        <div>CHAMPS WORLD</div>
        <div className="col center ">
          <h1>CHAMPS WORLD</h1>
          <div>Dallu , Chagal,Kathmandu</div>
          <div>Call :9849180494 , 9808581308</div>
          <div>FaceBook :WWW.Facebook.com/champsworld</div>
        </div>
        <div>picture</div>
      </div>
      <span> To Be Filled By Parent or Gardian In Capital Letter Only</span>
      <hr></hr>
      <form className="col">
        <div className="row ">
          <div>
            <label>
              <b>Class Applied Form :</b>
            </label>
            <input type="text" name="clsAppliedForm" />
          </div>
          <div>
            <label>S.no: </label> <input type="text" name="sno" />
          </div>
        </div>
        <div className="row space-around">
          <div>
            <label>Name of Pupil :  </label>
            <input name="pupilName" type="text" />
          </div>
          <div className="row space-around">
            <div>
              <label>Girl:</label>
              <input type="radio" name="gender" value="girl" />
            </div>
            <div>
              {" "}
              <label>Boy:</label>{" "}
              <input type="radio" name="gender" value="boy" />
            </div>
            <div>
              <label>Other:</label>
              <input type="radio" name="gender" value="other" />
            </div>
          </div>
        </div>
        <div className="row space-around">
          <div>
            <label>Date of Birth : </label> <input name="dob" type="date" />
          </div>
        </div>
        <div className="row space-around">
          <div>
            <label>Place of Birth : </label>
            <input name="placeOfBirth" type="text" />
          </div>
          <div>
            <label>Nationality : </label>
            <input name="nationality" type="text" />
          </div>
        </div>
        <div className="row space-around">
          <div>
            <label>Religion: </label>
            <input name="religion" type="text" />
          </div>
          </div>
            <div>
              <fieldset>
                <legend>DETAILS OF PARENTS:</legend>
              
              <table border= "2px, solid ">
                <tr align ="center">
                <th>FATHER</th>
                <th>MOTHER</th>
                </tr>
                <tr>
                <td><label>Name: </label> 
                <input name="fName" type="text" /> </td>
                <td><label>Name: </label> 
                <input name="fName" type="text" /> </td>
                </tr>
                <tr>
                <td><label>OCCUPATION: </label> 
                <input name="occupation" type="text" /> </td>
                <td><label> OCCUPATION:</label> 
                <input name="occupation" type="text" /> </td>
                </tr>
                <tr>
                <td><label>Mobile No.: </label>
                <input name="mobileno" type="text" /></td>
                <td><label>Mobile No.: </label>
                <input name="mobileno" type="text" /></td>
                </tr>
                <tr>
                <td><label>Office Phone: </label>
                <input name="oPhone" type="text" /></td>
                <td><label>Office Phone: </label>
                <input name="oPhone" type="text" /></td>
                </tr>
              </table>
              </fieldset>
              </div>
              <div>
              <label>FULL ADDRESH: </label>
            <input name="fullAddresh" type="text" placeholder ="FULL ADDRESH " />
                </div>  
                <div>
                <label>7.DETAILS OF GUARDIAN: NAME </label>
            <input name="details" type="text" placeholder ="NAME" /><br/>
            <label>FULL ADDRESH: </label>
            <input name="fullAddresh" type="text" placeholder ="FULL ADDRESH " /><br/>
            <label>CONTACT Nos.: </label>
            <input name="contactnos" type="text" placeholder ="CONTACT NOS " /><br/>
                </div>
           <div className="row space-around">
          <div>
            <label>BLOOD GROUP: </label>
            <input name="bloodGroup" type="text" />
          </div>
          <div>
            <label>VACCINATIONS TAKEN: </label>
            <input name="vaccinationTaken" type="text" />
          </div>
        </div>
        <div>
            <label>ANY ALLERGIES: </label>
            <input name="anyAllergies" type="text" />
          </div>
          <hr/>
          <p>I Declare the details mention above my child are true.I Shall abide by the rule and regulation of this school. </p>
             <br/>
             <div>
            <label>Date: </label> 
            <input name="dob" type="date" />
          </div>
          <div>
            <label>PLACE: </label>
            <input name="place" type="text" />
          </div>

             
              </form>
    </div>
  );
}
