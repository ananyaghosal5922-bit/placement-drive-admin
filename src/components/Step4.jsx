import { Field } from "formik";

function Step4({ setStep }) {
  return (
    <>
      <h2>Deadline</h2>

      <Field
        type="email"
        name="email"
        placeholder="HR Email"
      />

      <br /><br />

      <Field
        type="datetime-local"
        name="deadline"
      />

      <br /><br />

      <button
        type="button"
        onClick={() => setStep(3)}
      >
        Back
      </button>

      <button type="submit">
        Publish
      </button>
    </>
  );
}

export default Step4;