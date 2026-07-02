import { Field } from "formik";

function Step2({ setStep }) {
  return (
    <>
      <h2>Job Specifications</h2>

      <Field
        name="role"
        placeholder="Job Role"
      />

      <br /><br />

      <Field
        name="designation"
        placeholder="Designation"
      />

      <br /><br />

      <Field
        name="ctc"
        placeholder="CTC"
      />

      <br /><br />

      <Field
        name="location"
        placeholder="Location"
      />

      <br /><br />

      <button
        type="button"
        onClick={() => setStep(1)}
      >
        Back
      </button>

      <button
        type="button"
        onClick={() => setStep(3)}
      >
        Next
      </button>
    </>
  );
}

export default Step2;