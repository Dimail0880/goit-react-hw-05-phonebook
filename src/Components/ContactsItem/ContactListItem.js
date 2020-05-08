import React from "react";

const ContactListItem = ({ contact, name, number, deleteContact }) => {
  return (
    <li>
      {name}: {number}
      <button onClick={() => deleteContact(contact.id)}>Delete</button>
    </li>
  );
};

export default ContactListItem;
