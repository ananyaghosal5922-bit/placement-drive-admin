import { Field } from "formik";

function Step4({ setStep }) {
  return (
    <>
      <h2>Deadline</h2>
      <label>
     HR Email <span style={{ color: "red" }}>*</span>
      </label>
      <Field
        type="email"
        name="email"
        placeholder="Enter HR Email"
      />

      <br /><br />
      <label>
       Deadline <span style={{ color: "red" }}>*</span>
    </label>
      <Field
        type="datetime-local"
        name="deadline"
      />

      <br /><br />

     <div className="button-container">

  <button
    type="button"
    onClick={() => setStep(3)}
  >
    Previous
  </button>

  <button type="submit">
    Publish
  </button>

</div>
    </>
  );
}

export default Step4;