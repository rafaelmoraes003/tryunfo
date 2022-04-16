import React from 'react';
import PropTypes from 'prop-types';

class SelectInput extends React.Component {
  render() {
    const { testId, value, onChange, name, disabled, all } = this.props;
    return (
      <label htmlFor="raridade">
        Raridade:
        <select
          data-testid={ testId }
          id="raridade"
          value={ value }
          onChange={ onChange }
          name={ name }
          disabled={ disabled }
        >
          {all && (
            <>
              <option value="todas">Todas</option>
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito raro</option>
            </>
          )}
          {!all && (
            <>
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito raro</option>
            </>
          )}
        </select>
      </label>
    );
  }
}

SelectInput.propTypes = {
  testId: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  all: PropTypes.bool.isRequired,
};

export default SelectInput;
