import React, { Component } from "react";
import Form from "./Components/Form/Form";
import ContactsList from "./Components/ContactsList/ContactsList";
import { v4 as uuidv4 } from "uuid"; // uuidv4()
import ContactsFilterForm from "./Components/ContactsFilter/ContactsFilterForm";
import "react-toastify/dist/ReactToastify.css";
import storage from "../src/helpers/storage";
import { CSSTransition } from "react-transition-group";
import slideTransition from "./animations/slide.module.css";

const contactsData = storage.get("contacts");

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidMount() {
    console.log("mount");
    if (contactsData) {
      const newContacts = contactsData;
      this.setState({ contacts: newContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("updata");
  }

  updateStorage = (prevState) => {
    if (prevState.contacts !== this.state.contacts) {
      storage.save("contacts", this.state.contacts);
    }
  };

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };

  addItem = (item) => {
    const newContact = item;
    const newState = [...this.state.contacts, newContact];
    this.setState({
      contacts: newState,
    });
    storage.save("contacts", newState);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      id: uuidv4(),
      name: this.state.name,
      number: this.state.number,
    };

    this.addItem(newContact);
  };

  deleteContact = (id) => {
    const newState = this.state.contacts.filter((el) => el.id !== id);

    this.setState({
      contacts: newState,
    });
    storage.save("contacts", newState);
  };

  handleFilter = (e) => {
    this.setState({ filter: e.target.value });
  };

  getFilteredContacts = (filterValue, contacts) =>
    contacts.filter((el) =>
      el.name.toLowerCase().includes(filterValue.toLowerCase())
    );

  render() {
    const { filter, contacts } = this.state;

    const filteredContacts = this.getFilteredContacts(filter, contacts);

    console.log("render");
    return (
      <>
        <CSSTransition
          in={this.state.contacts.length >= 2}
          classNames={slideTransition}
          timeout={{ enter: 500, exit: 500 }}
          mountOnEnter
        >
          <h2>Phonebook</h2>
        </CSSTransition>
        <Form contacts={this.state.contacts} addItem={this.addItem} />
        <h2>Contacts</h2>

        <CSSTransition
          in={this.state.contacts.length >= 2}
          classNames={slideTransition}
          timeout={{ enter: 500, exit: 500 }}
          mountOnEnter
          unmountOnExit
        >
          <ContactsFilterForm handleFilter={this.handleFilter} />
        </CSSTransition>

        <ContactsList
          contactList={filteredContacts}
          deleteContact={this.deleteContact}
        />
      </>
    );
  }
}

export default App;
