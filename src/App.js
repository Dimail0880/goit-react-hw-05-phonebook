import React, { Component } from "react";
import Form from "./Components/Form/Form";
import ContactsList from "./Components/ContactsList/ContactsList";
import { v4 as uuidv4 } from "uuid"; // uuidv4()
import ContactsFilterForm from "./Components/ContactsFilter/ContactsFilterForm";
// import { toast } from 'react-toastify'; 
import "react-toastify/dist/ReactToastify.css";
import storage from "../src/helpers/storage";


class App extends Component {
  state = {
    contacts: [],
    filter: "",
    name: "",
    number: "",
  };


  async componentDidMount() {
    const contactsData = storage.get("contacts");
    if (contactsData) {
      this.setState({ contacts: contactsData });
    }
  }


  componentDidUpdate(prevProps, prevState) {
    this.updateStorage(prevState)
  }

  updateStorage = (prevState) => {
    if (prevState.contacts !== this.state.contacts) {
      storage.save("contacts", this.state.contacts);
    }
  }


  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const name = this.state.name;
    const number = Number(this.state.number);

    const newContact = {
      id: uuidv4(),
      name: this.state.name,
      number: this.state.number,
    };
    if (this.state.contacts.some((el) => el.name === this.state.name)) {
      alert(`${this.state.name} is already in contacts.`);
    } else if (!number && name === "") {
      alert("Please, enter name and number, your input is empty");
    } else if (!number) {
      alert("Please, enter a correct number");
    } else if (!name.length) {
      alert("Please, enter a name");
    } else if (Number(name)) {
      alert("Please, enter a correct name - NOT A NUMBER");
    } else {
      this.setState((prevState) => ({
        contacts: [...prevState.contacts, newContact],
        name: "",
        number: "",
      }));
    }
    // toast.success("ADD SUCCESS")
  };

  handleFilter = (e) => {
    this.setState({ filter: e.target.value });
  };

  getFilteredContacts = (filterValue, contacts) =>
    contacts.filter((el) =>
      el.name.toLowerCase().includes(filterValue.toLowerCase())
    );

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((el) => el.id !== id),
    }));
  };

  render() {
    const filteredContacts = this.getFilteredContacts(
      this.state.filter,
      this.state.contacts
    );
    return (
      <>
        <h2>Phonebook</h2>
        <Form
          name={this.state.name}
          number={this.state.number}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <h2>Contacts</h2>
        {this.state.contacts.length >= 2 && (
          <ContactsFilterForm handleFilter={this.handleFilter} />
        )}
        <ContactsList
          contactList={filteredContacts}
          deleteContact={this.deleteContact}
        />
      </>
    );
  }
}

export default App;
