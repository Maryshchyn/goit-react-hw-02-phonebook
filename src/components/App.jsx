import { Component } from 'react';
import Form from './Form/Form'
import {FormList} from './FormList/FormList'
import { nanoid } from 'nanoid';
import { Title } from './Title/Title';
import { Contacts } from './Contacts/Contacts';
import {Filter} from './Filter/Filter'



export class App extends Component {
   state = {
        contacts:  [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
     ],
     filter: '',
    };

 
  deleteForm = (constactId) =>{
    this.setState(prefState => ({
      contacts: prefState.contacts.filter(contact => contact.id !== constactId)
    }))
  }
  addForm = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }))
  }
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  


  render() {
    const {contacts, filter } = this.state;
    const normalizeFilter = filter.toLowerCase();

    const vaisibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter))
    
    return (
      <div>
        <Title title="Phonebook"/>
        <Form onSubmit={this.addForm} />
        <Contacts text='Contacts' />
        <Filter filter={filter}  onChange={this.changeFilter} />
        <FormList contacts={vaisibleContacts} delitForm={this.deleteForm} />
      </div>
   )
 }
}
