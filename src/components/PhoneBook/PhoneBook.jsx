import React, { Component } from "react";
import { FormTextInput } from "components/PhoneBook/FormTextInput/FormTextInput";
import { ContainerPhoneBook, Span } from "./PhoneBook.styled";
import { ListContacts } from "components/PhoneBook/ListContacts/ListContacts";
import { Search } from "components/PhoneBook/Search/Search";
import shortid from "shortid";

export class PhoneBook extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  }

  addName = (data) => {
    const contact = {
      id: shortid.generate(),
      name: data.name,
      number: data.number,
    };

    const contacts = this.state.contacts;
    for (const name of contacts) {
      const names = name.name;

      if (names === contact.name) {
        return alert(`${contact.name} is already in contacts`);
      }
    }
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  deliteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  resetSearch = () => {
    this.setState({ filter: "" });
  };

  render() {
    const { title, titleContacts } = this.props;
    const { filter, contacts } = this.state;

    //   фильтрация контактов не чуствительная к регистру
    const normalizedFilter = this.state.filter.toLowerCase();
    const filteredContacts = this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <ContainerPhoneBook>
        <h1>{title}</h1>
        <FormTextInput onSubmit={this.addName} />
        <h2>{titleContacts}</h2>

        {contacts.length === 0 ? (
          <h3>you have no contacts yet</h3>
        ) : (
          <>
            <Search
              value={filter}
              onChange={this.changeFilter}
              onReset={this.resetSearch}
            />
            {filteredContacts.length === 0 ? (
              <h3>
                you do not have contacts with the name <Span>{filter}</Span>
              </h3>
            ) : (
              <ListContacts
                events={filteredContacts}
                onDeliteContact={this.deliteContact}
              />
            )}
          </>
        )}
      </ContainerPhoneBook>
    );
  }
}
