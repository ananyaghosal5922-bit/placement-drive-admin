import { Field } from "formik";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Step2({ setStep }) {
  return (
    <>
      <h2>Job Specifications</h2>
      
      <label>
        Role <span style={{ color: "red" }}>*</span>
      </label>
      <Field
        name="role"
        placeholder="Enter Job Role"
      />

      <br /><br />
    <label>
     Designation <span style={{ color: "red" }}>*</span>
    </label>
      <Field
        name="designation"
        placeholder=" Enter Designation"
      />

      <br /><br />
      <label>
      CTC <span style={{ color: "red" }}>*</span>
      </label>
      <Field
       type="number"
       name="ctc"
       placeholder="Enter CTC"
      />

      <br /><br />
      <label>
  location <span style={{ color: "red" }}>*</span>
     </label>
      <Field
        name="location"
        placeholder="Enter Location"
      />

      <br /><br />

     <div className="button-container">

  <button
    type="button"
    onClick={() => setStep(1)}
  ><FaArrowLeft />
    Previous
  </button>

  <button
    type="button"
    onClick={() => setStep(3)}
  >
    Next <FaArrowRight />
  </button>

</div> 
    </>
  );
}

export default Step2;