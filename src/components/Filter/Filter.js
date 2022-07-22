import PropTypes from 'prop-types';

export const Filter = ({ filter, formSubmitFilter }) => {
  return (
    <label>
      Find contacts by name
      <input
        type="text"
        name="name"
        value={filter}
        onChange={formSubmitFilter}
      />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
};
