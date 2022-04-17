import React from 'react';
import PropTypes from 'prop-types';

class SaveButton extends React.Component {
  render() {
    const { testId, disabled, onClick } = this.props;
    return (
      <button
        type="button"
        data-testid={ testId }
        disabled={ disabled }
        onClick={ onClick }
        className="btn btn-primary"
      >
        Salvar
      </button>
    );
  }
}

SaveButton.propTypes = {
  testId: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SaveButton;
