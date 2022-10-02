import { Component } from 'react';



export class App extends Component {
  state = {
    contacts: [],
    name: ' ',
  }

  hendleChange = e => {
    this.setState({name: e.currentTarget.value})
  }
  render() {
    return (
      <form>
        <label>
          svz
     <input
        type="text"
        name="name"
        value={this.state.name}
        onChange={this.hendleChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        /></label>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
/>
      </form>
      
   )
 }

 
   
}
