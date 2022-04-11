import React from 'react';
import PropTypes from 'prop-types';

class TextArea extends React.Component {
  render() {
    const { title, testId } = this.props;
    return (
      <label htmlFor={ testId }>
        { title }
        <textarea
          data-testid={ testId }
          id={ testId }
        />
      </label>
    );
  }
}

TextArea.propTypes = {
  title: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
};

export default TextArea;
