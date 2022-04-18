import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      shouldHaveDeleteButton,
      onClick,
      text,
    } = this.props;
    return (
      <div className="card-container">
        {text && <h2>Preview</h2>}
        <div className="card-div">
          <h1 className="name-div" data-testid="name-card">{ cardName }</h1>
          <div className="image-div">
            <img src={ cardImage } alt={ cardName } data-testid="image-card" />
          </div>
          <div className="description-div">
            <div data-testid="description-card">{ cardDescription }</div>
          </div>
          <div className="attr-div">
            <div data-testid="attr1-card">{`Attr01:.................. ${cardAttr1}`}</div>
            <div data-testid="attr2-card">{`Attr02:.................. ${cardAttr2}`}</div>
            <div data-testid="attr3-card">{`Attr03:.................. ${cardAttr3}`}</div>
          </div>
          <div
            className="rare-div"
            data-testid="rare-card"
          >
            {`Raridade: ${cardRare}`}
          </div>
          {
            (cardTrunfo)
              ? <div className="trunfo-div" data-testid="trunfo-card">Super Trunfo</div>
              : ''
          }
        </div>
        { shouldHaveDeleteButton && (
          <button
            type="button"
            name={ cardName }
            onClick={ onClick }
            data-testid="delete-button"
            className="btn btn-danger"
          >
            Excluir
          </button>) }
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  shouldHaveDeleteButton: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.bool.isRequired,
};

export default Card;
