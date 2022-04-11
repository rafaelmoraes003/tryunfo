import React from 'react';
import PropTypes from 'prop-types';

class NumberInput extends React.Component {
  render() {
    const { testId, placeholder, number } = this.props;
    return (
      <label htmlFor={ number }>
        {`Atributo ${number}`}
        <input
          type="number"
          data-testid={ testId }
          placeholder={ placeholder }
          id={ number }
        />
      </label>
    );
  }
}

NumberInput.propTypes = {
  testId: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default NumberInput;
