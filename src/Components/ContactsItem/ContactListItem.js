import React from "react";
import styles from "./ContactListItem.module.css";
const ContactListItem = ({ contact, name, number, deleteContact }) => {
  return (
    <li className={styles.wrapper}>
      {name}: {number}
      <button
        className={styles.deleteBtn}
        onClick={() => deleteContact(contact.id)}
      >
        🞫
      </button>
    </li>
  );
};

export default ContactListItem;
