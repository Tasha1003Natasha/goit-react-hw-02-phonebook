import  {Component } from 'react';


export class App extends Component { 
  state = { 
    contacts: [], 
    name: "", 
  }; 
 
  handleChange = (event) => { 
    const { value, name } = event.target; 
    this.setState({ [name]: value }); 
  }; 
 
  render() { 
    const { contacts, name } = this.state; 
    console.log({ contacts, name }); 
 
    return ( 
      <form> 
        <div className="form"> 
          <h1 className="form__title">Phonebook</h1> 
          <label className="form__label"> 
            <p>Name</p> 
            <input 
              value={name} 
              type="text" 
              name="name" 
              className="form__input" 
              onChange={this.handleChange} 
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$" 
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan" 
              required 
            /> 
          </label> 
        </div> 
        <button type="submit" className="form__btn"> 
          Add contact 
        </button> 
 
        <h2 className="contact__title">Contacts</h2> 
        <ul className="contact__list"> 
          <li className="contact__item">Rosie Simpson: </li> 
          <li className="contact__item">Hermione Kline: </li> 
          <li className="contact__item">Eden Clements: </li> 
        </ul> 
      </form> 
    ); 
  } 
}


 

