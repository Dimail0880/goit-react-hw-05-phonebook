import React from "react";
import ContactListItem from "../ContactsItem/ContactListItem";
import PropTypes from "prop-types"; // ES6
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styles from "./list.module.css";
import slideTransition from "../../animations/slide.module.css";

const ContactsList = ({ contactList, deleteContact }) => (
  <TransitionGroup component="ul" className={styles.list}>
    {contactList
      .map((contact) => (
        <CSSTransition
          key={contact.id}
          classNames={slideTransition}
          timeout={500}
          mountOnEnter
          unmountOnExit
        >
          <ContactListItem
            name={contact.name}
            number={contact.number}
            deleteContact={deleteContact}
            contact={contact}
            className={styles.item}
          />
        </CSSTransition>
      ))
      .reverse()}
  </TransitionGroup>
);

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
