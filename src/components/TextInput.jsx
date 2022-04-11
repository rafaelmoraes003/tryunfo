import React from 'react';
import PropTypes from 'prop-types';

class TextInput extends React.Component {
  render() {
    const { testId, title } = this.props;
    return (
      <label htmlFor={ testId }>
        { title }
        :
        <input
          type="text"
          data-testid={ testId }
          id={ testId }
        />
      </label>
    );
  }
}

TextInput.propTypes = {
  testId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default TextInput;
