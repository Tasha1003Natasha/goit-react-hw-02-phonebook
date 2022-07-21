import { Component } from 'react';
import { nanoid } from 'nanoid';
import styles from '../ContactForm/ContactForm.module.css';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  //   loginInputId = nanoid();

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    const id = nanoid();
    this.props.onSubmit({ ...this.state, id });
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className={styles.form}>
          <h1 className="form__title">Phonebook</h1>
          <label className="form__label">
            <p>Name</p>
            <input
              type="text"
              name="name"
              value={name}
              className={styles.form__input}
              onChange={this.handleChange}
              id={this.loginInputId}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>

          <label className="form__label">
            <p>Number</p>
            <input
              type="tel"
              name="number"
              value={number}
              className={styles.form__input}
              onChange={this.handleChange}
              id={this.loginInputId}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
        </div>
        <button type="submit" className="form__btn">
          Add contact
        </button>

        <h2 className="contact__title">Contacts</h2>
        {/* <ul className="contact__list">
          <li className="contact__item">
            {name}:{number}
          </li>
          <li className="contact__item">
            {name}: {number}
          </li>
          <li className="contact__item">
            {name}:{number}
          </li>
        </ul> */}
      </form>
    );
  }
}
