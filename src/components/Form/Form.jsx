const { Component } = require("react");

class Form extends Component {
    state = {
        name: '',
        number: '',
    };

    hendleChange = e => {
    const { name, value } = e.currentTarget
    this.setState({
      [name]: value
    })
    };

    hendlerOnSubmit = e => {
    e.preventDefault();
      console.log(this.state)
      this.props.onSubmit(this.state.name, this.state.number)
     

      this.setState({ name: '',
        number: ''})
  }
    
    render() {
        return (
             <form onSubmit={this.hendlerOnSubmit}>
        <label>
          svz
     <input
        type="text"
        name="name"
        value={this.state.name}
        onChange={this.hendleChange}
        // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
          /></label>
        <label>
          svz
      <input
        type="tel"
            name="number"
            value={this.state.number}
        onChange={this.hendleChange}
        // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
          />
        </label>
        <button type='submit'>Відправити</button>
      </form>
        )
    }
}
export default Form;