import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import ContactsDemo from './contactDemo.json';
import { Wrapper, Title, SubTitle } from './App.styled';

class App extends Component {
  state = {
    contacts: ContactsDemo,
    filter: '',
  };

  addContact = data => {
    const { contacts } = this.state;
    const dublicate = contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );
    if (dublicate) {
      alert(`${data.name} is already in contacts!`);
      return;
    }
    this.setState(prevState => {
      const { contacts } = prevState;
      const { name, number } = data;
      const newContact = {
        name,
        number,
        id: nanoid(),
      };
      return {
        contacts: [...contacts, newContact],
      };
    });
  };

  removeContact = id => {
    this.setState(({ contacts }) => {
      return {
        contacts: contacts.filter(item => item.id !== id),
      };
    });
  };

  getFilteredContacts() {
    const { filter, contacts } = this.state;
    //проверка на пустую строку
    if (!filter) {
      return contacts;
    }
    const filterValue = filter.toLowerCase();
    const filteredContacts = contacts.filter(({ name }) => {
      const nameValue = name.toLowerCase();
      return nameValue.includes(filterValue);
    });
    return filteredContacts;
  }

  handleFilter = ({ target }) => {
    this.setState({
      filter: target.value,
    });
  };

  render() {
    const { handleFilter, removeContact, addContact } = this;
    const contacts = this.getFilteredContacts();
    return (
      <Wrapper>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={addContact} />
        <SubTitle>Contacts</SubTitle>
        <Filter handleFilter={handleFilter} />
        <ContactList contacts={contacts} removeContact={removeContact} />
      </Wrapper>
    );
  }
}
export default App;
