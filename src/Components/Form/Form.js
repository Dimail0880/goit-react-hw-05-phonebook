import React from "react";

const Form = ({ name, number, handleChange, handleSubmit }) => {
  return (
    <div>
      <form className="form-section" autoComplete="off" onSubmit={handleSubmit}>
        <h4>Name</h4>
        <input
          name="name"
          type="text"
          value={name}
          onChange={handleChange}
        ></input>

        <h4>Number</h4>
        <input
          name="number"
          type="text"
          value={number}
          onChange={handleChange}
        ></input>
        <button
          className="addContact-btn"
          disabled={!name.length || !number.length}
          type="submit"
        >
          Add contact
        </button>
      </form>
    </div>
  );
};

export default Form;
