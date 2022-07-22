import { Component } from 'react';

export const Filter = ({ filter, formSubmitFilter }) => {
  return (
    <form>
      <label>
        Find by user name
        <input
          type="text"
          name="name"
          value={filter}
          onChange={formSubmitFilter}
        />
      </label>
    </form>
  );
};
