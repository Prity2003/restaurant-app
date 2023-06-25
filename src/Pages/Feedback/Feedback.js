import React, { Fragment } from "react";
import "./Feedback.css";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { toasterMsg } from '../../Components/Toaster';

const handleSubmit = async (event) => {
  toasterMsg("Thank you for your feedback!", 'success');
}

const Feedback = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="feedback-container">
      <div className="feedback-box">
        <h1>Feedback & Survey</h1>
        <h3>Please take a moment to fill out this form</h3>
        <hr />
        <br />
        <form>
          <p>1.Please rate the quality of service you received from us:</p>
          <input type="radio" name="quality" id="ex" value="Excellent" />
          <label for="ex">Excellent</label>
          <input type="radio" name="quality" id="good" />
          <label for="good">Good</label>
          <input type="radio" name="quality" id="fair" />
          <label for="fair">Fair</label>
          <input type="radio" name="quality" id="poor" />
          <label for="poor">Poor</label>
          <br />

          <p>2. Please rate the information we provided on our website:</p>
          <input type="radio" name="information" id="ex" value="Excellent" />
          <label for="ex">Excellent</label>
          <input type="radio" name="information" id="good" />
          <label for="good">Good</label>
          <input type="radio" name="information" id="fair" />
          <label for="fair">Fair</label>
          <input type="radio" name="information" id="poor" />
          <label for="poor">Poor</label>
          <br />

          <p>3. Please rate our staff in terms of efficiency:</p>
          <input type="radio" name="staff" id="ex" value="Excellent" />
          <label for="ex">Excellent</label>
          <input type="radio" name="staff" id="good" />
          <label for="good">Good</label>
          <input type="radio" name="staff" id="fair" />
          <label for="fair">Fair</label>
          <input type="radio" name="staff" id="poor" />
          <label for="poor">Poor</label>
          <br />

          <p>4. Please rate our responsivness to the feedback:</p>
          <input type="radio" name="responsivness" id="ex" value="Excellent" />
          <label for="ex">Excellent</label>
          <input type="radio" name="responsivness" id="good" />
          <label for="good">Good</label>
          <input type="radio" name="responsivness" id="fair" />
          <label for="fair">Fair</label>
          <input type="radio" name="responsivness" id="poor" />
          <label for="poor">Poor</label>
          <br />

          <p>5. Please rate your overall experience with our service:</p>
          <input type="radio" name="experience" id="ex" value="Excellent" />
          <label for="ex">Excellent</label>
          <input type="radio" name="experience" id="good" />
          <label for="good">Good</label>
          <input type="radio" name="experience" id="fair" />
          <label for="fair">Fair</label>
          <input type="radio" name="experience" id="poor" />
          <label for="poor">Poor</label>
          <br />

          <p>6. Would you recommend us to your friends and family:</p>
          <input type="radio" name="recommend" id="yes" value="Yes" />
          <label for="yes">Yes</label>
          <input type="radio" name="recommend" id="no" value="No" />
          <label for="no">No</label>
          <br />
          <br />
          <button className="feedback-btn" onClick={handleSubmit}>Submit</button>
        </form>
      </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Feedback;
