import React from "react";

const ContactsFilterForm = ({ handleFilter }) => {
  return (
    <>
      <p>Find contact by name</p>
      <input type="text" onChange={handleFilter} />
    </>
  );
};

export default ContactsFilterForm;
