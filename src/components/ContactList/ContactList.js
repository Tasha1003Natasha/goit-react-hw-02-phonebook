import PropTypes from 'prop-types';

export const ContactList = ({ contactList }) => {
  return (
    <ul className="contact__list">
      {contactList.map(({ id, name, number }) => {
        return (
          <li className="contact__item" key={id}>
            {name}:{number}
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contactList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
