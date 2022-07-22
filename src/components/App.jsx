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
  this.setState(prevState => ({
    filter:value
  }))
}

getSubmitContacts =()=> {
  const {contacts, filter} = this.state;
  return contacts.filter(({name})=>name.includes(filter))

}

  render() { 
const {contacts, filter} = this.state;

    return ( 
      <>
  <ContactForm onSubmit={this.formSubmitHendler}/>
  <Filter filter={filter} formSubmitFilter={this.formSubmitFilter}/>
  <ContactList contactList={contacts}/>
</>
    )
}
}

