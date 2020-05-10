import React, { Component } from "react";
import styles from "./Form.module.css";
import { v4 as uuidv4 } from "uuid"; // uuidv4()
import { CSSTransition } from "react-transition-group";
import popTransition from "../../animations/pop.module.css";

export default class Form extends Component {
  state = {
    name: "",
    number: "",
    isError: false,
    errorMessage: "",
  };

  handleNameChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleNumberChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  pushError = (message) => {
    this.setState({
      isError: true,
      errorMessage: `${message}`,
    });
    setTimeout(() => {
      this.setState({ isError: false });
    }, 2500);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      id: uuidv4(),
      name: this.state.name,
      number: this.state.number,
    };

    const name = this.state.name;
    const number = Number(this.state.number);
    const contacts = this.props.contacts;
    const includeContacts = contacts.find(
      (contact) => contact.name === this.state.name
    );
    if (includeContacts) {
      this.pushError(`${name} is already in contacts.`);
    } else if (!number && name === "") {
      this.pushError("Please, enter name and number, your input is empty");
    } else if (!number) {
      this.pushError("Please, enter a correct number");
    } else if (!name.length) {
      this.pushError("Please, enter a name");
    } else if (Number(name)) {
      this.pushError("Please, enter a correct name - NOT A NUMBER");
    } else {
      this.props.addItem(newContact);
      this.setState({ name: "", number: "", isError: false, errorMessage: "" });
    }
  };

  render() {
    const { name, number, isError, errorMessage } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <CSSTransition
          in={isError}
          classNames={popTransition}
          timeout={{ enter: 2500, exit: 500 }}
          mountOnEnter
          unmountOnExit
        >
          <p className={styles.errorMessage}>{errorMessage}</p>
        </CSSTransition>
        <p className={styles.name}>Name:</p>
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.handleNameChange}
          className={styles.input}
        />
        <p className={styles.name}>Number:</p>
        <input
          type="text"
          name="number"
          value={number}
          onChange={this.handleNumberChange}
          className={styles.input}
        />
        <button
          className={styles.button}
          disabled={name && number ? false : true}
          type="submit"
        >
          Add contact
        </button>
      </form>
    );
  }
}
