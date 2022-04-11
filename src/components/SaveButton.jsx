import React from 'react';
import PropTypes from 'prop-types';

class SaveButton extends React.Component {
  render() {
    const { testId } = this.props;
    return (
      <button
        type="button"
        data-testid={ testId }
      >
        Salvar
      </button>
    );
  }
}

SaveButton.propTypes = {
  testId: PropTypes.string.isRequired,
};

export default SaveButton;
