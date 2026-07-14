import { Field } from "formik";

function Step3({ setStep }) {
  return (
    <>
      <h2>Eligibility</h2>
      <label>
      CGPA <span style={{ color: "red" }}>*</span>
    </label>
      <Field
        type="number"
        name="cgpa"
        placeholder="Minimum CGPA"
      />

      <br /><br />
      <label>
       Batch Year <span style={{ color: "red" }}>*</span>
    </label>
      <Field
        type="number"
        name="batch"
        placeholder="Enter Batch Year"
      />

      <br /><br />
      <label>
  Eligible Branches <span style={{ color: "red" }}>*</span>
    </label>
      <h3>Eligible Branches</h3>

      <label>
        <Field
          type="checkbox"
          name="branches"
          value="CSE"
        />
        CSE
      </label>

      <br />

      <label>
        <Field
          type="checkbox"
          name="branches"
          value="IT"
        />
        IT
      </label>

      <br />

      <label>
        <Field
          type="checkbox"
          name="branches"
          value="ECE"
        />
        ECE
      </label>

      <br /><br />

     <div className="button-container">

  <button
    type="button"
    onClick={() => setStep(2)}
  >
    Previous
  </button>

  <button
    type="button"
    onClick={() => setStep(4)}
  >
    Next
  </button>

</div>
    </>
  );
}

export default Step3;