import PropTypes from 'prop-types';

export const ContactList = ({ contactList, handleDelete }) => {
  return (
    <ul className="contact__list">
      {contactList.map(({ id, name, number }) => {
        return (
          <li className="contact__item" key={id}>
            {name}:{number}
            <button onClick={() => handleDelete(id)} type="button">
              Delete
            </button>
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
