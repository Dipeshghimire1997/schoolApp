import React from 'react'
import {Form,Row,Col} from 'react-bootstrap';
export default function Application() {
    return (
        <div>
            <div class = "title">
                <h1>CHAMPS WORLD</h1>
                <h6>Dallu,Chagal,Kathmandu</h6>
                <h6>Cell:9849180494/9808581308</h6>
                <h6>Facebook ID:WWW.facebook.com/champsworld</h6>
            </div>
            <div>
                <h1>APPLICATION FORM</h1>
               
                <p>TO BE FILLED BY PARENTS OR GURDIAN IN CAPITAL LETTERS ONLY</p>
                <div> photo</div>
            <hr></hr>
            
            <div>
 <Form>
        CLASS APPLIED FOR:
        
        <Form.Control placeholder="CLASS APPLIED" />
         <br></br>
  <Row>
    <Col>
    <Form.Control placeholder="First name" />
    </Col>
    <Col>
      <Form.Control placeholder="Last name" />
    </Col>
  </Row>
        <div>
        <label>Gender:</label>       
         <input type="checkbox" VALUE = "GIRL" CHECKED />GIRL
         <input type="checkbox" VALUE = "BOY"  />BOY
         </div>
         <div>
             DATE OF BIRTH:
             <Row>
                 <Col>
                 dd
                 <Form.Control />
                 <Form.Control />
                 </Col>
                 <Col>MONTH:
                 <Form.Control />
                 <Form.Control />
                 </Col>s

             </Row>
         </div>
         <div>
             <Row>
                 <Col>
             PLACE OF BIRTH
             <Form.Control />
             </Col>
             <Col>
                NATIONALITY:
                <Form.Control />
             </Col>
                  
                 </Row>
         </div>
</Form>
  
        
            </div>

            </div>

        </div>
    )
}
