import React from 'react';
import PropTypes from 'prop-types';

class Checkbox extends React.Component {
  render() {
    const { testId, checked, onChange, name, trunfo } = this.props;
    return (
      trunfo ? <p>Você já tem um Super Trunfo em seu baralho</p>
        : (
          <label htmlFor={ testId }>
            Super Trybe Trunfo
            <input
              type="checkbox"
              data-testid={ testId }
              id={ testId }
              checked={ checked }
              onChange={ onChange }
              name={ name }
            />
          </label>
        )
    );
  }
}

Checkbox.propTypes = {
  testId: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  trunfo: PropTypes.bool.isRequired,
};

export default Checkbox;
