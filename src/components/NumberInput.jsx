import React from 'react';
import PropTypes from 'prop-types';

class NumberInput extends React.Component {
  render() {
    const { testId, placeholder, number, value, onChange, name } = this.props;
    return (
      <label htmlFor={ number }>
        {`Atributo ${number}`}
        <input
          type="number"
          data-testid={ testId }
          placeholder={ placeholder }
          id={ number }
          value={ value }
          onChange={ onChange }
          name={ name }
          min="0"
        />
      </label>
    );
  }
}

NumberInput.propTypes = {
  testId: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default NumberInput;
