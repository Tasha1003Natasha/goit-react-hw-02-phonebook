import  {Component } from 'react';
import {ContactForm} from './ContactForm/ContactForm'
import {ContactList} from './ContactList/ContactList'
// import {Filter} from './Filter/Filter'
// import '../index.css';

export class App extends Component { 
  state = { 
    contacts: [], 
  }; 
 

formSubmitHendler = contact => {
  this.setState(prevState => ({
    contacts: [...prevState.contacts,contact]
  }))
}

  render() { 
const {contacts} = this.state;

    return ( 
      <>
  <ContactForm onSubmit={this.formSubmitHendler}/>
  <ContactList contactList={contacts}/>
</>
    )
}
}

// ////////////////////////////////////////////////
  //   const { contacts, name } = this.state; 
 

  //   return ( 
  //     <form onSubmit={this.handleSubmit}> 
  //       <div className="form"> 
  //         <h1 className="form__title">Phonebook</h1> 
  //         <label className="form__label"> 
  //           <p>Name</p> 
  //           <input 
  //             type="text" 
  //             name="name" 
  //             value={name} 
  //             className="form__input" 
  //             onChange={this.handleChange} 
  //             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$" 
  //             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan" 
  //             required 
  //           /> 
  //         </label> 
  //       </div> 
  //       <button type="submit" className="form__btn"> 
  //         Add contact 
  //       </button> 
 
  //       <h2 className="contact__title">Contacts</h2> 
  //       <ul className="contact__list"> 
  //         <li className="contact__item">Rosie Simpson: </li> 
  //         <li className="contact__item">Hermione Kline: </li> 
  //         <li className="contact__item">Eden Clements: </li> 
  //       </ul> 
  //     </form> 
  //   ); 
//   // } 
// }



 

