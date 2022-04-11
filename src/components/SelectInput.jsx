import React from 'react';
import PropTypes from 'prop-types';

class SelectInput extends React.Component {
  render() {
    const { testId } = this.props;
    return (
      <label htmlFor="raridade">
        Raridade:
        <select data-testid={ testId } id="raridade">
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
};

export default SelectInput;
