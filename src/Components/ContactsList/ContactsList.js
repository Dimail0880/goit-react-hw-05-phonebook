import React from "react";
import { v4 as uuidv4 } from "uuid"; // uuidv4()
import ContactListItem from "../ContactsItem/ContactListItem";
import { ToastContainer } from "react-toastify";
import PropTypes from "prop-types"; // ES6

const ContactsList = ({ contactList, deleteContact }) => {
  return (
    <ul>
      {contactList.map((contact) => (
        <ContactListItem
          key={uuidv4()}
          name={contact.name}
          number={contact.number}
          deleteContact={deleteContact}
          contact={contact}
        />
      ))}
      <ToastContainer />
    </ul>
  );
};

ContactsList.propTypes = {
  contactsList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  deleteContact: PropTypes.func,
};
export default ContactsList;
