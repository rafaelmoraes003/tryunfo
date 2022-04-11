import React from 'react';
import PropTypes from 'prop-types';

class Checkbox extends React.Component {
  render() {
    const { testId } = this.props;
    return (
      <label htmlFor={ testId }>
        Super Trybe Trunfo
        <input
          type="checkbox"
          data-testid={ testId }
          id={ testId }
        />
      </label>
    );
  }
}

Checkbox.propTypes = {
  testId: PropTypes.string.isRequired,
};

export default Checkbox;
