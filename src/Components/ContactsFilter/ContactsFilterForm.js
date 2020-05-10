import React from "react";
import style from "./ContactsFilter.module.css";

const ContactsFilterForm = ({ handleFilter }) => {
  return (
    <form className={style.wrapper}>
      <p>Find contact by name</p>
      <input type="text" onChange={handleFilter} />
    </form>
  );
};

export default ContactsFilterForm;
