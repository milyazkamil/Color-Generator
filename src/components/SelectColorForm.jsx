import { useState } from "react";

const SelectColorForm = ({ addColor }) => {
  const [color, setColor] = useState('#00ffe1');

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(color);
  };

  return (
    <section
      id="form-container"
      className="d-flex justify-content-center"
    >
      <h1 className="fs-2 fw-normal">Color Generator</h1>
      <form
        id="form"
        className="d-flex align-items-center"
        onSubmit={handleSubmit}
      >
        <input
          className="me-3 border border-0"
          name="color"
          id="color-input"
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          className="px-2 border border-0 fs-4"
          type="text"
          id="text-input"
          placeholder="#00ffe1"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <button
          className="py-2 px-3 border border-0 rounded-end"
          id="submit-btn"
          type="submit"
        >
          Submit
        </button>
      </form>
    </section>
  )
}
export default SelectColorForm;