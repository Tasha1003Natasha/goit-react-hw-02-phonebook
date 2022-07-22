import  {Component } from 'react';
import {ContactForm} from './ContactForm/ContactForm'
import {ContactList} from './ContactList/ContactList'
import {Filter} from './Filter/Filter'
// import '../index.css';

export class App extends Component { 
  state = { 
    contacts: [], 
    filter: "",
  }; 
 

formSubmitHendler = contact => {
  this.setState(prevState => ({
    contacts: [...prevState.contacts,contact]
  }))
}

formSubmitFilter = ({target: {value}})=> {
  this.setState({
    filter:value.toLowerCase()
  })
}

getSubmitContacts =()=> {
  const {contacts, filter} = this.state;
  return contacts.filter(({name})=>name.toLowerCase().includes(filter));
}

handleDelete = id => {
this.setState(prevState=> {
  return {contacts:prevState.contacts.filter(contact =>contact.id !==id)}
})
};


  render() { 
const { filter} = this.state;

    return ( 
      <>
  <h1>Phonebook</h1>
  <ContactForm onSubmit={this.formSubmitHendler}/>

  <h2>Contacts</h2>
  <Filter filter={filter} formSubmitFilter={this.formSubmitFilter}/>
  <ContactList contactList={this.getSubmitContacts()}  handleDelete={this.handleDelete}/>
</>
    )
}
}

