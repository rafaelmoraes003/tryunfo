import React from 'react';
import PropTypes from 'prop-types';

class TextInput extends React.Component {
  render() {
    const { testId, title, value, onChange, name, disabled } = this.props;
    return (
      <label htmlFor={ testId }>
        { title }
        :
        <input
          type="text"
          data-testid={ testId }
          id={ testId }
          value={ value }
          onChange={ onChange }
          name={ name }
          disabled={ disabled }
        />
      </label>
    );
  }
}

TextInput.propTypes = {
  testId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default TextInput;
