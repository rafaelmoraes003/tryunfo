import React from 'react';
import PropTypes from 'prop-types';

class TextArea extends React.Component {
  render() {
    const { title, testId, value, onChange } = this.props;
    return (
      <label htmlFor={ testId }>
        { title }
        <textarea
          data-testid={ testId }
          id={ testId }
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

TextArea.propTypes = {
  title: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextArea;
