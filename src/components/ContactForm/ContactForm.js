import { Component } from 'react';
import { nanoid } from 'nanoid';
import styles from '../ContactForm/ContactForm.module.css';

export class ContactForm extends Component {
  state = {
    name: '',
  };

  loginInputId = nanoid();

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name } = this.state;
    this.props.onSubmit({ ...this.state });

    this.reset();
  };

  reset = () => {
    this.setState({ name: '' });
  };

  render() {
    const { name } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className={styles.form}>
          <h1 className="form__title">Phonebook</h1>
          <label htmlFor={this.loginInputId} className="form__label">
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
