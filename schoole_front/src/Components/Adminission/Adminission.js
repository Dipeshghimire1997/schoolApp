import React from "react";

export default function Adminission() {
  return (
    <div>
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
      </div>

      <span> To Be Filled By Parent or Gardian In Capital Letter Only</span>
      <div className="container">
        <br />
        <form>



          <div className="row">
            <lable>1.Class Applied Form :</lable>

            <input type="text" name="clsAppliedForm" />
            <div>

              <label>2.S.no: </label> <input type="text" name="sno" />
            </div>
          </div>


          <div>
            <label>3.Name of Pupil :  </label>
            <input name="pupilName" type="text" />
          </div>

          <div className="row" >

            <label>4.Gender:</label>



            <label>GIRL:</label><input type="radio" name="gender" value="girl" />



            <label>BOY:</label>


            <input type="radio" name="gender" value="boy" />

            <label>OTHER:</label>
            <input type="radio" name="gender" value="other" />




          </div>




          <div className="row" >


            <label>6.Place of Birth : </label>
            <input name="placeOfBirth" type="text" />


            <div>
              <label>5.Date of Birth : </label> <input name="dob" type="date" />
            </div>

          </div>
          <div>
            <label>7.Nationality : </label>
            <input name="nationality" type="text" />
          </div>


          <div>
            <label>8.Religion: </label>
            <input name="religion" type="text" />
          </div>

          <div>
            <fieldset>
              <legend>9.DETAILS OF PARENTS:</legend>

              <table border="2px, solid ">
                <tr align="center">
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
          </div><br />
          <div>
            <label>10.FULL ADDRESH: </label>
            <input name="fullAddresh" type="text" placeholder="FULL ADDRESH " />
          </div>
          <div>
            <label>11.DETAILS OF GUARDIAN:</label>
            <input name="details" type="text" placeholder="NAME" /><br />
            <label>12.FULL ADDRESH: </label>
            <input name="fullAddresh" type="text" placeholder="FULL ADDRESH " /><br />
            <label>13.CONTACT Nos.: </label>
            <input name="contactnos" type="text" placeholder="CONTACT NOS " /><br />
          </div>
          <div>
            <div>
              <label>14.BLOOD GROUP: </label>
              <input name="bloodGroup" type="text" />
            </div>
            <div>
              <label>15.VACCINATIONS TAKEN: </label>
              <input name="vaccinationTaken" type="text" />
            </div>
          </div>
          <div>
            <label>16.ANY ALLERGIES: </label>
            <input name="anyAllergies" type="text" />
          </div>
          <hr /><input type="checkbox" />
          <p>I Declare the details mention above my child are true.I Shall abide by the rule and regulation of this school. </p>
          <br />

          <div className="row">
            <lable>17.PLACE:</lable>

            <input type="text" name="place" />
            <div>
              <label>18 DATE: </label> 
              <input name="dob" type="date" />
            </div>
          </div>




        </form>
        <div>
          <input type="submit" value="Submit"></input>
        </div>

      </div>
    </div>
  );


}
