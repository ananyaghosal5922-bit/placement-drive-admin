import { Field } from "formik";

function Step3({ setStep }) {
  return (
    <>
      <h2>Eligibility</h2>

      <Field
        type="number"
        name="cgpa"
        placeholder="Minimum CGPA"
      />

      <br /><br />

      <Field
        type="number"
        name="batch"
        placeholder="Batch Year"
      />

      <br /><br />

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

      <button
        type="button"
        onClick={() => setStep(2)}
      >
        Back
      </button>

      <button
        type="button"
        onClick={() => setStep(4)}
      >
        Next
      </button>
    </>
  );
}

export default Step3;