import React from 'react';
import PropTypes from 'prop-types';

class Checkbox extends React.Component {
  render() {
    const { testId, checked, onChange } = this.props;
    return (
      <label htmlFor={ testId }>
        Super Trybe Trunfo
        <input
          type="checkbox"
          data-testid={ testId }
          id={ testId }
          checked={ checked }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Checkbox.propTypes = {
  testId: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Checkbox;
