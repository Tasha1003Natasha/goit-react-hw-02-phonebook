import  {Component } from 'react';
import {ContactForm} from './ContactForm/ContactForm'
import {ContactList} from './ContactList/ContactList'
import {Filter} from './Filter/Filter'
import '../index.css';

export class App extends Component { 
  state = { 
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: "",
  }; 
 

formSubmitHendler = contact => {

const searchName = this.state.contacts
.map((contact) => contact.name).includes(contact.name)
if (searchName) {
  return  alert(`${contact.name}  is already in contacts`);
} 
  this.setState(prevState => ({
    contacts: [...prevState.contacts,contact]

  }))
}

// else if (contact.name.length === "" ) {
//   return alert(`Fields must be filled`);


formSubmitFilter = ({target: {value}})=> {
  this.setState({
    filter:value
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
  <h1 className='title'>Phonebook</h1>
  <ContactForm onSubmit={this.formSubmitHendler}/>

  <h2 className='title'>Contacts</h2>
  <Filter filter={filter} formSubmitFilter={this.formSubmitFilter}/>
  <ContactList contactList={this.getSubmitContacts()}  handleDelete={this.handleDelete}/>
</>
    )
}
}

