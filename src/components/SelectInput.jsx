import React from 'react';
import PropTypes from 'prop-types';

class SelectInput extends React.Component {
  render() {
    const { testId, value, onChange } = this.props;
    return (
      <label htmlFor="raridade">
        Raridade:
        <select
          data-testid={ testId }
          id="raridade"
          value={ value }
          onChange={ onChange }
        >
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito raro</option>
        </select>
      </label>
    );
  }
}

SelectInput.propTypes = {
  testId: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SelectInput;
