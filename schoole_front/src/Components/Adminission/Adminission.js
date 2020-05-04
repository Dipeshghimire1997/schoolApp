import React from "react";

export default function Adminission() {
  return (
    <div className="col">
      <div className="row space-around center">
        <div>CHAMPS WORLD</div>
        <div className="col center ">
          <h1>CHAMPS WORLD</h1>
          <div>Dalu , Chagal,Kathmandu</div>
          <div>Call :number</div>
          <div>FaceBook :inof</div>
        </div>
        <div>picture</div>
      </div>
      <span> To Be Filled By Parent or Gardian In Capital Latters Onlu</span>
      <form className="col">
        <div className="row space-around">
          <div>
            <label>
              <b>Class Applied Form :</b>
            </label>
            <input type="text" name="clsAppliedForm" />
          </div>
          <div>
            <label>S.no:</label> <input type="text" name="sno" />
          </div>
        </div>
        <div className="row space-around">
          <div>
            <label>Name of Pupil : </label>
            <input name="pupilName" type="text" />
          </div>
          <div className="row ">
            <div>
              <label>Girl:</label>
              <input type="radio" name="gender" value="girl" />
            </div>
            <div>
              <label>Boy:</label>{" "}
              <input type="radio" name="gender" value="boy" />
              <div></div>
              <label>Other:</label>
              <input type="radio" name="gender" value="other" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
