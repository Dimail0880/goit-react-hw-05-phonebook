import React, { Component } from "react";
import styles from "./Form.module.css";
import { v4 as uuidv4 } from "uuid"; // uuidv4()

export default class Form extends Component {
  state = {
    name: "",
    number: "",
  };

  handleNameChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleNumberChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
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

        if (!number && name === "") {
      alert("Please, enter name and number, your input is empty");
    } else if (!number) {
      alert("Please, enter a correct number");
    } else if (!name.length) {
      alert("Please, enter a name");
    } else if (Number(name)) {
      alert("Please, enter a correct name - NOT A NUMBER");
    } else {
      this.props.addItem(newContact);

      this.setState({ name: "", number: "" });
    }
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <p className={styles.name}>name:</p>
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.handleNameChange}
          className={styles.input}
        />
        <p className={styles.name}>number:</p>
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
