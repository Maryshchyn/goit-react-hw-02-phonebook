import { Component } from 'react';
import Form from './Form/Form'
import FormList from './FormList/FormList'
import { nanoid } from 'nanoid';
// import shortid from 'shortid';



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


  render() {
    const { contacts } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <Form onSubmit={this.addForm} />
        
        <FormList contacts={contacts} delitForm={this.deleteForm} />

      
        
        </div>
   )
 }

 
   
}
